const util = require('util');
const exec = util.promisify(require('child_process').exec);

const workingDir = 'week04-docker-composer';

let allBranches = [];

async function getBranches(res) {
    // prettier-ignore
    const { stdout, stderr } = await exec('git branch -a | sed -n -e \'s/remotes.origin*.//p\' | grep -v \'HEAD\'', {
        cwd: workingDir
    });

    const output = stdout.trim();
    allBranches = output.split('\n').map(item => item.trim());
    console.log('stdout:', output);
    console.error('stderr:', stderr);
    if (res) {
        res.send({
            result: 'success',
            response: output,
            branches: allBranches
        });
    } else {
        return allBranches;
    }
}

async function getNewRepo(res) {
    response.send({result: "success"});
}

module.exports.getNewRepo = getNewRepo;
module.exports.getBranches = getBranches;
module.exports.workingDir = workingDir;
