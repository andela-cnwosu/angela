!function(){var t=angular.module("store",["store-products"]);t.controller("StoreController",["$http","$location",function(t,o){var e=o.absUrl(),r=this;t.get(e+"data/products.json").success(function(t){r.products=t})}]),t.controller("ReviewController",function(){this.review={},this.addReview=function(t){t.reviews.push(this.review),this.review={}}})}();
!function(){var t=angular.module("store-products",[]);t.directive("productTitle",function(){return{restrict:"E",templateUrl:"../views/directives/product-title.html"}});var e=function(){this.tab=1,this.selectTab=function(t){this.tab=t},this.isSelected=function(t){return this.tab===t}};t.directive("productPanel",function(){return{restrict:"E",templateUrl:"../views/directives/product-panel.html",controller:e,controllerAs:"panel"}})}();