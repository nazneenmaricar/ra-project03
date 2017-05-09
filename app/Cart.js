import CartView from './CartView';
import App from './App';

export default class Cart {
  constructor(app) {
    this.cartView = new CartView();
    this.app = app;
    this.ss = window.sessionStorage;

    //console.log("cart??? you there???");
  }

  addItemToCart(sku, qty = 1) {
    //console.log("adding item to cart");
    //this.ss.setItem(sku,qty.toString());

    var sessionLength = this.ss.length;
    if (sessionLength <= 0) {
      this.ss.setItem(sku, qty.toString());
      this.updateLittleCartIcon(qty);
      return;
    }
    console.log(this.ss);
    let newTotalQty = 0;
    let match = 0;

    for (let key in this.ss) {
      if (key == sku.toString()) {
        // console.log(`matched ${sku} and ${key}`);
        let oldQty = this.ss.getItem(key);
        oldQty = parseInt(oldQty);
        let newQty = oldQty + qty;
        newQty = newQty.toString();
        this.ss.setItem(key, newQty);
        match = 1;
      }
    }
    if (match <= 0) {
      //console.log("new item to add - " + sku);
      this.ss.setItem(sku, qty.toString());
    }
    for (let i = 0; i < this.ss.length; i++) {
      let skuKey = this.ss.key(i);
      //console.log(skuKey);
      let qtyValue = this.ss.getItem(skuKey);
      newTotalQty += parseInt(qtyValue);
    }
    //console.log(this.cartView);
    this.updateLittleCartIcon(newTotalQty);
  }

  updateLittleCartIcon(qty) {
    //console.log(qty);
      // let toCartView = {product: this.app.allProducts.productList,
      // createItem: this.cartView.createItem,viewCart: this.cartView};

       document.getElementById("numItemsParagraph").innerHTML = qty; /*quantity updates*/

      //  document.getElementById("numItemsParagraph").addEventListener("click", this.cartView.onClickOpenCart.bind(toCartView), false); /*opens cart view*/
    }

  }
