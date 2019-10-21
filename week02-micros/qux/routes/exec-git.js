const util = require('util');
const exec = util.promisify(require('child_process').exec);
const workingDir = 'isit320-dean-2019';

async function checkoutBranch(response, branch) {
    const {stdout, stderr} = await exec('git checkout ' + branch, {
        cwd: workingDir
    });
    const output = stdout;
    console.log('stdout:', output);
    console.error('stderr:', stderr);
    if (response) {
        response.send({result: 'success', response: output.trim()});
    } else {
        return output.trim();
    }
}

module.exports.checkoutBranch=checkoutBranch;