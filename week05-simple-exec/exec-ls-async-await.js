const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function execList(repoName) {
    const {stdout, stderr} = await exec('ls -la', {
        cwd: process.env.GIT_HOME + '/' + repoName + '/'
    });

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
}

(async () => {
	await execList('isit320-dean-2019');
	console.log('All DONE!');
})();
