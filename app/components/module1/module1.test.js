'use strict';

describe('app.module1 module', function() {

  beforeEach(module('app.module1'));

  describe('module1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var module1Ctrl = $controller('Module1Ctrl');
      expect(module1Ctrl).toBeDefined();
    }));

  });
});