(function(){
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', function($http){

    var store = this;

    store.products = [];

    $http.get('./store-products.json').then(function(reponse){
      store.products = response.data;
    });
  }]);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.currentImageChange = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();
