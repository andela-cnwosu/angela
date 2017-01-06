(function(){
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', '$location', function($http, $location){
    var root = $location.absUrl();
    var store = this;
    $http.get(root + 'data/products.json').success(function(data){
      store.products = data;
    });
  }]);

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();