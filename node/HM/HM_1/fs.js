const fs = require('node:fs').promises;
const path = require("path");


const BoysPath = path.join(__dirname,'Boys')
const GirlsPath = path.join(__dirname,'Girls')

fs.readdir(BoysPath)
    .then(Files =>{
        for (const name of Files) {
            const file = path.join(BoysPath,name)
            fs.readFile(file)
                .then(value => {
                    const json = JSON.parse(value);
                    if (json.gender === "female"){
                        fs.rename(file, path.join(GirlsPath, name))
                    } else{
                        fs.rename(file, path.join(BoysPath, name))
                    }
                })
        }
    })
fs.readdir(GirlsPath)
    .then(Files =>{
        for (const name of Files) {
            const file = path.join(GirlsPath,name)
            fs.readFile(file)
                .then(value => {
                    const json = JSON.parse(value);
                    if (json.gender === "male"){
                        fs.rename(file, path.join(BoysPath, name))
                    } else{
                        fs.rename(file, path.join(GirlsPath, name))
                    }
                })
        }
    })



