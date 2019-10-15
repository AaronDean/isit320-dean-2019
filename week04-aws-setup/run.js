var AWS = require('aws-sdk');

AWS.config.loadFromPath(process.env.HOME + '/.aws/config.json');
// AWS.config.update({region:'us-east-1'});

AWS.config.credentials.get(function () {
    var accessKeyId = AWS.config.credentials.accessKeyId;
    var secretAccessKey = AWS.config.credentials.secretAccessKey;
    console.log("Access Key:", AWS.config.credentials.accessKeyId);
    console.log("Secret Access Key:", AWS.config.credentials.secretAccessKey);
    console.log('Region', AWS.config.region);
});
console.log(AWS.config.credentials);

// Create EC2 serv,  awsEducate: ['sg-08b43f5679e9a5f46']ice object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

const ubuntuImages = {awsStandard: 'ami-06f2f779464715dc5'};
const keyPairs = {awsStandard: 'ec2-isit320-2019'};
const securityGroups = {awsStandard: ['sg-0e9dbf8e518dc1896']};

var instanceParams = {
    BlockDeviceMappings: [
        {
            DeviceName: "/dev/sda1",
            Ebs: {
                VolumeSize: 16,
                VolumeType: 'gp2'
            }
        }
    ],
    ImageId: ubuntuImages.awsStandard,
    InstanceType: 't2.micro',
    KeyName: keyPairs.awsStandard,
    SecurityGroupIds: securityGroups.awsStandard,
    MinCount: 1,
    MaxCount: 1
};

// Create a promise on an EC2 service object
var instancePromise = new AWS.EC2({apiVersion: '2016-11-15'}).runInstances(instanceParams).promise();

// Handle promise's fulfilled/rejected states
instancePromise.then(
    function (data) {
        console.log(data);
        var instanceId = data.Instances[0].InstanceId;
        console.log("Created instance", instanceId);
        // Add tags to the instance
        var date = new Date().toISOString();
        tagParams = {
            Resources: [instanceId], Tags: [
                {
                    Key: 'Name',
                    Value: 'isit320-' + date
                }
            ]
        };
        // Create a promise on an EC2 service object
        var tagPromise = new AWS.EC2({apiVersion: '2016-11-15'}).createTags(tagParams).promise();
        // Handle promise's fulfilled/rejected states
        tagPromise.then(
            function (data) {
                console.log("Instance tagged");
            }).catch(
            function (err) {
                console.error(err, err.stack);
            });
    }).catch(
    function (err) {
        console.error(err, err.stack);
    }
);