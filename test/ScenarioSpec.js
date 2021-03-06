'use strict';

describe("ScenarioSpec: Compilation", function() {
  var scope;

  beforeEach(function() {
    scope = null;
  });

  afterEach(function() {
    dealoc(scope);
  });

  describe('compilation', function() {
    it("should compile dom node and return scope", function() {
      var node = jqLite('<div ng:init="a=1">{{b=a+1}}</div>')[0];
      scope = angular.compile(node)();
      scope.$digest();
      expect(scope.a).toEqual(1);
      expect(scope.b).toEqual(2);
    });

    it("should compile jQuery node and return scope", function() {
      scope = compile(jqLite('<div>{{a=123}}</div>'))();
      scope.$digest();
      expect(jqLite(scope.$element).text()).toEqual('123');
    });

    it("should compile text node and return scope", function() {
      scope = angular.compile('<div>{{a=123}}</div>')();
      scope.$digest();
      expect(jqLite(scope.$element).text()).toEqual('123');
    });
  });
});
