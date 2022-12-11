const fs = require('node:fs').promises;
const path = require("path");


const BoysPath = path.join(__dirname,'Boys')
const GirlsPath = path.join(__dirname,'Girls')

function sortGender (genderPath){
    fs.readdir(genderPath)
        .then(Files =>{
            for (const name of Files) {
                const file = path.join(genderPath,name)
                fs.readFile(file)
                    .then(value => {
                        value = JSON.parse(value);
                        value.gender === "female" ? fs.rename(file, path.join(GirlsPath, name)) : fs.rename(file, path.join(BoysPath, name));
                    });
            }
        });
}

sortGender(BoysPath);
sortGender(GirlsPath);




