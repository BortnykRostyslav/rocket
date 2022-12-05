function createNewUser(name, age) {
    return {
        name,
        age,
        hello: () => {
            console.log('Hello my name is ' + name);
            console.log('I am ' + age + ' years old');
        }
    }
}

module.exports = {
    createNewUser
}