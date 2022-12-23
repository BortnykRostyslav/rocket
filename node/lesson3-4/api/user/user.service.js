const users = require("../../dataBase/users.json");
const fs =  require("node:fs").promises;
const path =require("node:path")

const PathDir = path.join(__dirname,"../../dataBase/");
const DataBaseFile = path.join(PathDir,"users.json");

module.exports = {
    addUser: async (reqBody)=>{
        const file = await  fs.readFile(DataBaseFile);
        const addUs = JSON.parse(file);

        addUs.push(reqBody)

        await fs.writeFile(DataBaseFile,JSON.stringify(addUs))
    },
    getSingleUser: async (userId) => {
        const user = users[userId - 1];

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    },
    updateUser: async (userId,body) => {
        const id = userId - 1;

        const file = await  fs.readFile(DataBaseFile);
        const addUs = JSON.parse(file);

        addUs.splice(id,1,body)

        await fs.writeFile(DataBaseFile,JSON.stringify(addUs))
    },
    deleteUser: async  (userId)=> {
        const id = userId - 1;

        const file = await  fs.readFile(DataBaseFile);
        const delUs = JSON.parse(file);

        delUs.splice(id,1)

        await fs.writeFile(DataBaseFile,JSON.stringify(delUs))
    }
}