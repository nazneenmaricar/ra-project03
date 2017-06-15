/*This js fine is connected to the CarouselView.js file. sku is passed to cart and quickView*/
import CarouselView from './CarouselView';

export default class Carousel{
constructor(cart, quickView){
  //console.log("The Carousel!!!");
  this.cart = cart;
  this.quickView = quickView;
}
    cartSku(sku){
      this.cart.addItemToCart(sku, 1);
    }
    quickViewSku(sku) {
    this.quickView.getSku(sku);
    }
  }
