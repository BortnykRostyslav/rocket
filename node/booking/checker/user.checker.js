const EmailValidUniq = (email) => {
    const registry = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return registry.test(email);
}

module.exports = {
    EmailValidUniq
};