import path from 'node:path';

const message = 'Hello world!';

console.log(message);

const somePath = path.join('some_folder', 'some_file.txt');

console.log(somePath);

const pathToWorkDir = path.join(process.cwd());
console.log(pathToWorkDir);

const test = path.parse(pathToWorkDir);

console.log(test);


