'use strict';


describe('PhoneDetailsCtrl', function(){
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

  beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/phones/xyz').respond({
        name: 'phone xyz',
        images: 'image/url1.png image/url2.png'
      });

      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
      expect(scope.phone).toEqualData({});
      $httpBackend.flush();

      expect(scope.phone).toEqualData({
        name: 'phone xyz',
        images: ['image/url1.png', 'image/url2.png']
      });
    });
});
