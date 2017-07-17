(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      this.review = {
        createdOn: Date.now(),
      };
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '...',
      images:[
        {
          full: 'img/gem-01.gif',
          thumb: 'img/gem-02.gif'
        }
      ],
      reviews: [
        {
          stars: 5,
          boy: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ],
      canPurchase: true,
      soldOut: true,
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '...',
      images:[
        {
          full: 'img/gem-03.gif',
          thumb: 'img/gem-04.gif'
        }
      ],
      canPurchase: true,
      soldOut: false,
    }
  ];
})();
