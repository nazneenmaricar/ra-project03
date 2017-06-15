import AllProducts from './AllProducts';
//import Cart from './Cart';

export default class CartView {
  constructor(allProducts) {
    //console.log("CartView js");
    this.allProducts = allProducts;
  }

  onClickOpenCartView(e) {
    let allProducts = this.products;
    /*the skus of the items that are added to the cart are held by session storage as keys and the each Sku quantity as values*/
    let ss = window.sessionStorage;
    console.log(ss);
    console.log(this);
    /*cart view dialogue box*/
    document.getElementById("cv-modal").style.display = "block";
    document.getElementById("cartview").style.display = "block";
    document.getElementById("cv-close").addEventListener("click", this.viewCart.onClickCloseCartView, false);
    document.getElementById("cv-empty").addEventListener("click", this.viewCart.onClickEmptyCart.bind(ss), false);
    document.getElementById("button-checkout").addEventListener("click", this.viewCart.onClickCheckoutCart, false);
    /*gets the respective product by taking each products sku which is in session storage*/
    let skuInSessionStorage = function(products, sku) {
      if (products) {
        for (let i = 0; i < products.length; i++) {
          if (products[i].sku == sku) {
            return products[i];
          }
          let inSession = skuInSessionStorage (products[i], sku);
          if (inSession) return inSession;
        }
      }
    };
    console.log(ss.length);
    for (let a= 0; a< ss.length; a++) {
      let skuKey = ss.key(a);
      //console.log(skuKey);
      let skuQty = ss.getItem(ss.key(a));
      /*matched products are taken and its inforamtion are rendered in cart view*/
      //console.log(allProducts);
      let itemSku = skuInSessionStorage(allProducts, skuKey);
      console.log("sku");
      this.viewCart.createCartItem(itemSku.image, itemSku.name, itemSku.manufacturer, itemSku.salePrice, itemSku.sku, ss, skuQty)
    }
  }

createCartItem(prodImage, prodName, prodManufacturer, prodSalePrice, prodSku, ss, skuQty) {
  /*Creating the elements and products in the cart are displayed in row formate*/
  console.log("CREATE CART ITEM");
  let cartDiv = document.createElement("div");
  cartDiv.setAttribute("class","cart-flex");
  let cartImage = this.creatCartImage(prodImage);
  cartDiv.appendChild(cartImage);

  let infoDiv = document.createElement("div");
  infoDiv.setAttribute("class","info-flex");
  let cartManu = this.creatCartManu(prodManufacturer);
  infoDiv.appendChild(cartManu);
  let cartPrice = this.creatCartPrice(prodSalePrice, skuQty);
  infoDiv.appendChild(cartPrice);
  cartDiv.appendChild(infoDiv)

  let buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class","button-flex");
  let updateButton = this.createUpdateButton(prodSku, ss);
  buttonDiv.appendChild(updateButton);
  let removeButton = this.createRemoveButton(prodSku, ss);
  buttonDiv.appendChild(removeButton);
  cartDiv.appendChild(buttonDiv);

  /*appending the cartdiv to cartview id in html*/
  document.getElementById("cartview").appendChild(cartDiv);
}

creatCartImage(prodImage){
  let newCartImage = document.createElement("img");
  newCartImage.setAttribute("src", prodImage);
  newCartImage.setAttribute("alt", `${name} image`);
  newCartImage.setAttribute("class"," cv-image");
  return newCartImage;
}

creatCartManu(prodManufacturer){
  let newCartManu = document.createElement("p");
  newCartManu.setAttribute("class","cv-manu");
  let newTextContent = document.createTextNode(`${prodManufacturer}`);
  newCartManu.appendChild(newTextContent);
  return newCartManu;
}

creatCartPrice(prodSalePrice, skuQty){
  let newCartPrice = document.createElement("p");
  newCartPrice.setAttribute("class","cv-price");
  let newPriceContent = document.createTextNode(`${prodSalePrice}, ${skuQty}`);
  newCartPrice.appendChild(newPriceContent);
  return newCartPrice;
}

createUpdateButton(sku, ss){
  let newUpdateButton = document.createElement("button");
  newUpdateButton.setAttribute("type","button");
  newUpdateButton.setAttribute("data-sku", sku);
  newUpdateButton.setAttribute("class","cv-button");
  newUpdateButton.appendChild(document.createTextNode("Update"));
  newUpdateButton.addEventListener("click",this.onClickUpdateItem.bind(this), false);
  return newUpdateButton;
}

createRemoveButton(sku, ss){
  let newRemoveButton = document.createElement("button");
  newRemoveButton.setAttribute("type","button");
  newRemoveButton.setAttribute("data-sku", sku);
  newRemoveButton.setAttribute("class", "cv-button");
  newRemoveButton.appendChild(document.createTextNode("Remove"));
  newRemoveButton.addEventListener("click",this.onClickRemoveItem.bind(this), false);
  return newRemoveButton;
}

onClickCloseCartView(e) {
   document.getElementById("cv-modal").style.display = "none";
  document.getElementById("cartview").style.display = "none";
}

onClickUpdateItem(e){
  console.log("Update");
}
onClickRemoveItem(e) {
  console.log("Remove");
}


onClickCheckoutCart(e){
  window.alert ("check-out cart");
}

onClickEmptyCart(e){
      // this.clear();
      console.log("empty button");
    }
}
