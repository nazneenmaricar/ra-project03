import AllProducts from './AllProducts';
//import Cart from './Cart';

export default class CartView {
  constructor(allProducts) {
    console.log("CartView!!!! viewed???");
    this.allProducts = allProducts;
  }
  // updateLittleCartIcon(qty){
  //     document.getElementById("numItemsParagraph").innerHTML = qty;
  //   }

  onClickOpenCartView(e) {
    let allProducts = this.products;
    let ss = window.sessionStorage;
    //console.log("Display view ss");
    //console.log(ss);
    document.getElementById("cartview-view").style.display = "block";
    document.getElementById("cartview").style.display = "block";
    document.getElementById("cartview-close").addEventListener("click", this.viewCart.onClickCloseCart, false);
    document.getElementById("cartview-empty").addEventListener("click", this.viewCart.onClickEmptyCart.bind(ss), false);
    document.getElementById("button-checkout").addEventListener("click", this.viewCart.onClickCheckoutCart, false);

    var skuInSessionStorage = function(products, sku) {
      if (products) {
        for (var i = 0; i < products.length; i++) {
          if (products[i].sku == sku) {
            return products[i];
          }
          var inSessionStorage = skuInSessionStorage (products[i], sku);
          if (inSessionStorage) return inSessionStorage;
        }
      }
    };
    for (var i= 0; i< ss.length; i++) {
      let skuKey = ss.key(i);
      let skuQty = ss.getItem(i);
      let itemSku = skuInSessionStorage(allTheProducts, skuKey);
      this.viewCart.createItem (prodimage, prodname, prodmanufacturer, prodsalePrice, prodsku)
    }
  }

createCartView(image, name, manufacturer, salePrice, sku) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("cartview").style.display = "block";
  let closeCart = document.getElementById("cartview-close").appendChild(document.createTextNode("close"));
  document.getElementById("cartview-close").addEventListener("click", this.onClickCloseQuickView, false);

  let imageCartView = document.getElementById("cartview-image").setAttribute("src", image);

  let nameCartView = document.getElementById("cartview-name").appendChild(document.createTextNode(name));

  let manufacturerCartView = document.getElementById("cartview-manufacturer").appendChild(document.createTextNode(manufacturer));

  let priceCartView = document.getElementById("cartview-price").appendChild(document.createTextNode(price));

  let newButton = this.createButton(sku);
  document.getElementById("cartview-button").appendChild(newButton);
}

createUpdateItemToCart(sku) {
  let newUpdateItem = document.createElement("button");
  newUpdate.setAttribute("type", "button");
  newUpdate.setAttribute("data-sku", sku);
  // newUpdate.setAttribute(""); //style
  // newUpdate.setAttribute(""); //style
  newUpdate.appendChild(document.createTextNode("Update"));
  newUpdate.addEventListener("click", this.onClickUpdateToCart.bind(ths), false);
  return newUpdate;
}

createRemoveItemFromCart(sku) {
  let newRemoveItem = document.createElement("button");
  newRemoveItem.setAttribute("type", "button");
  newRemoveItem.setAttribute("data-sku", sku);
  // newRemoveItem.setAttribute(""); //style
  // newRemoveItem.setAttribute(""); //style
  newRemoveItem.appendChild(document.createTextNode("Remove"));
  newUpdate.addEventListener("click", this.onClickRemoveItemFromCart.bind(ths), false);
  return newRemoveItem;
}

onClickCheckoutCart(e){
  window.alert ("checking out");
}

onClickEmptyCart(e){
      this.clear();
      console.log(this);
    }
}
