module.exports = {
    elements: {
        divLogin: '#login-page',
        userNameInput: 'input[placeholder="Username"]',
        passInput: 'input[placeholder="Password"]',
        loginBtn:'button[type="button"]'
    },
    commands: {
        loginloaded(){
            return this
            .assert.visible('@divLogin', 'login page loaded');
        },
        loginPage(name, pass) {
            return this
                .setValue('@userNameInput', name)
                .setValue('@passInput', pass)
                .click('@loginBtn')
                .api.page.notesPages();
        }
    }
}