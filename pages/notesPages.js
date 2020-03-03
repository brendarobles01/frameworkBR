module.exports={
    elements:{
            title:'#my-notes-page'
    },
    commands:{
        loginSuccefull(){
            return this
            .assert.visible('@title', 'You are in');
        }

    }
}