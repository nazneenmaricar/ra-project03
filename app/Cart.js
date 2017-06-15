import CartView from './CartView';
import App from './App';

export default class Cart {
  constructor(app) {
    this.cartView = new CartView();
    this.app = app;
    this.ss = window.sessionStorage;

    //console.log("cart js ");
  }

  addItemToCart(sku, qty = 1) {
    //console.log("adding item to cart");
    //this.ss.setItem(sku,qty.toString());
    let sessionLength = this.ss.length;
    if (sessionLength <= 0) {
      this.ss.setItem(sku, qty.toString());
      this.updateCartIcon(qty);
      return;
    }
    //console.log(this.ss);
    let newTotalQty = 0;
    let match = 0;
    for (let key in this.ss) {
      if (key == sku) {
        // console.log(`matched ${sku} and ${key}`);
        /*converts the string to number as the current quantity is a string*/
        let oldQty = this.ss.getItem(key);
        oldQty = parseInt(oldQty);
        let newQty = oldQty + qty;
        /*converts number back to string*/
        newQty = newQty.toString();
        this.ss.setItem(key, newQty);
        match = 1;
      }
   }

   /*If a match is not found a new key value is created and it udates the view*/
    if (match <= 0) {
      //console.log("new item to add - " + sku);
      this.ss.setItem(sku, qty.toString());
    }
    /*evaluate the current quantities to receive a new total*/
    for (let i = 0; i < this.ss.length; i++) {
      let skuKey = this.ss.key(i);
      //console.log(skuKey);
      let qtyValue = this.ss.getItem(skuKey);
      newTotalQty += parseInt(qtyValue);
    }
    //console.log(this.cartView);
    this.updateCartIcon(newTotalQty);
  }

  updateCartIcon(qty) {
    /*object(this) is passed to the cartview by binding to event handling functio*/
    console.log(this.app);
      let toCartView = {products: this.app.allProducts.productList, createCartItem: this.cartView.createCartItem, viewCart: this.cartView, icon: this.updateCartIcon};

      /*shopping cart icon's quntity gets updated*/
      document.getElementById("numItemsParagraph").innerHTML = qty;
      document.getElementById("numItemsParagraph").style.display = 'block';

      /*opens cart view on clicking shopping cart icon*/
      document.getElementById("numItemsParagraph").addEventListener("click", this.cartView.onClickOpenCartView.bind(toCartView), false);
  }
}
