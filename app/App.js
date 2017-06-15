//this particular file connects all the js files


import BestBuyService from './BestBuyService';
import AllProducts from "./AllProducts";
import Product from './Product';
import QuickViewView from './QuickViewView';
import QuickView from './QuickView';
import CartView from './CartView';
import Cart from './Cart';
import Carousel from './Carousel';
import CarouselView from './CarouselView';


export default class App {
  constructor() {
    console.log("App is being created");


    //this.product = new Product(this);
    this.allProducts = null;
    this.bbService = new BestBuyService();
    //console.log(this.productList);
    this.cartView = new CartView(this.allProducts);
    this.cart = new Cart(this);
    this.quickViewView = new QuickViewView(this);
    this.quickView = new QuickView(this.quickViewView);
    this.carousel = new Carousel(this.cart,this.quickView);
    this.carouselView = new CarouselView(this.carousel);
  }
  init() {
    this.bbService.init(this);
  }

  getData(data) {
    this.allProducts = data;
    this.carouselView.init(this.allProducts.productList);
    //product data from bbService //productList (allproducts)
  }
}
