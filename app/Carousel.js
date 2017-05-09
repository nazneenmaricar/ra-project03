/*This js fine is connected to the CarouselView.js file. sku is passed to cart and quickView*/
import CarouselView from './CarouselView';

export default class Carousel{
constructor(cart, quickView){
  //console.log("The Carousel!!!");
  this.cart= cart;
  this.quickView= quickView;
}
    cartSku(sku){
      //console.log("nanzeen");
      //console.log(sku);
      this.cart.addItemToCart(sku, 1);
    }
    quickViewSku(sku) {
      //console.log(sku);
    this.quickView.getSku(sku);
    }
  }
