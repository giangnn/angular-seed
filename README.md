# Customized angular-seed — the seed for AngularJS apps

This project is my customized version of [angular-seed](https://github.com/angular/angular-seed).
For project usage, you can refer to the original project.

## Example components

All examples can be found under `components` folder.

### Module1
This is the Hello world module. It demonstrates the structure of an Angular module and how pieces under a module play together.

### Followers
This is a simple program that shows followers of a Github user. It demonstrates the use of [smart-table](https://github.com/lorenzofox3/Smart-Table) with AJAX call.

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    module1/              --> each business module resides in 1 dedicated directory
      module1.js                 --> entry point of the module, which declares module to the global namespace
      module1.route.js                  --> defines routes powered by this module
      module1.controller.js             --> where controller resides. If you have more than 1 controller per module, name them as name.controller.js 
      module1.service.js                --> where reusable logic code resides. If you have more than 1 service per module, name them as name.service.js
      module1.test.js                   --> to be explored later
      module1.html                 --> where template resides. If you have more than 1 view per module name them as name.view.html
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```