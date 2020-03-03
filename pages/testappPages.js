module.exports = {
    url: "http://testapp.galenframework.com/",
    elements: {
        loginBtn: '.button-login',
    },
    commands: {
        pageloaded() {
            return this
                .click('@loginBtn')
                .api.page.loginPages();
        }
    }
}