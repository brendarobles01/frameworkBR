const geckodriver = require('geckodriver');

module.exports={
    src_folders:'test',
    page_objects_path:'pages',
    webdriver:{
        start_process:true,
        port:4444,
        server_path:geckodriver.path
    },
    test_settings:{
        default:{
            desiredCapabilities:{
                browserName:'firefox'
            }
        }
    }
}