const fs = require('node:fs');
const path = require("path");

// const fs = require('node:fs').promises;
// const path = require("path");

console.log(__dirname);
console.log(__filename);

// fs.readFile('./app.js', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//
//     console.log(data);
// })

// fs.appendFile('./data.txt', 'Hello world \n')
//     .catch(e => {
//         console.log(e);
//     })

// const DecemberPath = path.join(__dirname,'December')
// fs.readdir(DecemberPath)
//     .then(FilesOrDir => {
//         console.log(FilesOrDir);
//
//         for (const string of FilesOrDir) {
//             console.log(string);
//
//             const PathToFile = path.join(DecemberPath, string)
//             console.log(PathToFile);
//
//             fs.stat(PathToFile)
//                 .then(value => {
//                     console.log(PathToFile);
//                     console.log(value.isFile(), 'File');
//                     console.log(value.isDirectory(), 'Directory');
//                 })
//         }
//     })
//     .catch(e => {
//         console.log(e);
//     })

// const DecemberPath = path.join(__dirname,'December')
// fs.readdir(DecemberPath)
//     .then(FilesOrDir => {
//         console.log(FilesOrDir);
//
//         const fsStatPromiseArr = [];
//
//         for (const string of FilesOrDir) {
//             console.log(string);
//
//             const PathToFile = path.join(DecemberPath, string)
//             console.log(PathToFile);
//
//             fsStatPromiseArr.push(fs.stat(PathToFile));
//         }
//
//         console.log(fsStatPromiseArr);
//
//         return Promise.allSettled(fsStatPromiseArr);
//     })
//     .then(fsStatInfo => {
//         console.log(fsStatInfo);
//     })
//     .catch(e => {
//         console.log(e);
//     })

// const DecemberPath = path.join(__dirname,'December')
// fs.readdir(DecemberPath)
//     .then(FilesOrDir => {
//         const fsStatPromiseArr = [];
//
//         FilesOrDir.forEach(string => fsStatPromiseArr.push(fs.stat(path.join(DecemberPath, string))));
//
//         return Promise.allSettled(fsStatPromiseArr);
//     })
//     .then(fsStatInfo => {
//         for (const fsStatInfoElement of fsStatInfo) {
//             if(fsStatInfoElement.status === 'fulfilled'){
//                 console.log(fsStatInfoElement.value);
//             }
//         }
//     })
//     .catch(e => {
//         console.log(e);
//     })

// const DecemberPath = path.join(__dirname,'December')
// fs.readdir(DecemberPath, {withFileTypes: true}).then(files =>{
//     files.forEach(file => {
//         console.log(file);
//         console.log(file.isFile());
//     })
// })

// fs.truncate('./data.txt').then()

let readStream = fs.createReadStream(path.join(__dirname,'data.txt'));
let writeStream = fs.createWriteStream(path.join(__dirname,'data_1.txt'));

readStream
    .on('data', (chunk) => {
        console.log(chunk);
    })
    .on('end', () => {
        console.log('File end')
    })

writeStream
    .write('god job')


