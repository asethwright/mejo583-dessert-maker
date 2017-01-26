console.info('Welcome to the dessert maker v1.0.');

var images = {
};

var app = new Vue({
    el: '#container',
    methods: {
      setFruit: function (f) {
        this.currentFruit = f;
      },
      setDessert: function (d) {
        this.currentDessert = d;
      },
      // reset: function () {
      reset () {
        this.currentFruit = null;
        this.currentDessert = null;
      },
      logger (e) {
        console.log(e)
        console.log('mouse moved!')
      }
    },
    data: {
      currentFruit: null,
      currentDessert: null,
      images: {
        fruits: {
          apple: 'img/Apple.jpg',
          orange: 'img/Orange.jpg',
          banana: 'img/Banana.jpg'
        },
        desserts: {
          icecream: 'img/IceCream.jpg',
          cake: 'img/Cake.jpg',
          pie: 'img/Pie.jpg'
        },
        mixes: {
          apple: {
            icecream: 'img/AppleIceCream.jpg',
            cake: 'img/AppleCake.jpg',
            pie: 'img/ApplePie.jpg'
          },
          orange: {
            icecream: 'img/OrangeIceCream.jpg',
            cake: 'img/OrangeCake.jpg',
            pie: 'img/OrangePie.jpg'
          },
          banana: {
            icecream: 'img/BananaIceCream.jpg',
            cake: 'img/BananaCake.jpg',
            pie: 'img/BananaPie.jpg'
          }
        }
      }
    }
});
