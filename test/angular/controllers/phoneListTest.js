'use strict';


describe('PhoneListCtrl', function(){
  var scope, ctrl, $httpBackend;

  beforeEach(function(){
    jasmine.addMatchers({
            toEqualData: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: angular.equals(actual, expected),
                            message: 'expected: ' + expected + ' and got: ' +   actual
                        };
                    }
                };
            }
    });
  });

  beforeEach(module('phonecatApp'));
  beforeEach(module('phonecatServices'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/phones').
      respond([{"name": "Motorola XOOM\u2122 with Wi-Fi"},
               {"name": "MOTOROLA XOOM\u2122"}
              ]);
    scope = $rootScope.$new();
    ctrl = $controller('PhoneListCtrl', {$scope:scope});
  }));

  it('should create "phones" model with 2 phones fetched from XHR', function() {
    expect(scope.phones).toEqualData([]);
    $httpBackend.flush();
    expect(scope.phones).toEqualData([{"name": "Motorola XOOM\u2122 with Wi-Fi"}, {"name": "MOTOROLA XOOM\u2122"}]);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });
});
