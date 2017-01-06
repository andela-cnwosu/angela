(function(){

var app = angular.module('store-products', []);

app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: '../partials/product-title.html'
    };
  });

  var panelController = function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  };

  app.directive('productPanel', function(){
    return {
      restrict: 'E',
      templateUrl: '../partials/product-panel.html',
      controller: panelController,
      controllerAs: 'panel'
    };
  });
})();