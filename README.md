# Customized angular-seed — the seed for AngularJS apps

This project is my customized version of [angular-seed](https://github.com/angular/angular-seed).
For project usage, you can refer to the original project.

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    module1/              --> each business module resides in 1 dedicated directory
      module.js                 --> entry point of the module, which declares module to the global namespace
      route.js                  --> defines routes powered by this module
      controller.js             --> where controller resides. If you have more than 1 controller per module, name them as name-controller.js 
      service.js                --> where reusable logic code resides. If you have more than 1 service per module, name them as name-service.js
      test.js                   --> to be explored later
      view.html                 --> where template resides. If you have more than 1 view per module name them as name-view.html
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```