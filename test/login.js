require('../nightwatch.conf')
const user = 'testuser@example.com'
const pass = 'test123'

module.exports={
    before(browser){    
        const pages = browser.page.testappPages()
        pages.navigate()
        .assert.urlContains('galenframework')
        .waitForElementPresent('body');
    },
    'login in galenframework':function(browser){
        const pages = browser.page.testappPages()
        pages
        .pageloaded()
        .loginloaded()
        .loginPage(user,pass)
        .loginSuccefull();
    },
    after(browser){
        browser.end();
    }

}