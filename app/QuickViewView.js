import App from './App';
import QuickView from './QuickView';

export default class QuickViewView {
  constructor(app) {
    //console.log("QuickViewView Nazneen!!!");
    this.app = app;
  }

  usethistomatchproductsku(sku) {
    console.log(sku);
    let currentSku = sku;
    let allProducts = this.app.allProducts.productList;
    for (let i = 0; i < allProducts.length; i++) {
      if (currentSku == allProducts[i].sku) {
        let prodImage = allProducts[i].image;
        let prodName = allProducts[i].name;
        let prodManufacturer = allProducts[i].manufacturer;
        let prodSalePrice = allProducts[i].salePrice;
        let prodSku = allProducts[i].sku;
        this.createQuickView(prodImage, prodName, prodManufacturer, prodSalePrice, prodSku);
      }
    }
  }
  createQuickView(image, name, manufacturer, salePrice, sku) {

    document.getElementById("modal").style.display = "block";
    document.getElementById("quickview").style.display = "block";
    let closeQuickView =
    document.getElementById("quickview-close").addEventListener("click", this.onClickCloseQuickView, false);

    let imageQuickView = document.getElementById("quickview-image").setAttribute("src", image);


    let nameQuickView = document.getElementById("quickview-name").appendChild(document.createTextNode(name));

    let manufacturerQuickView = document.getElementById("quickview-manufacturer").appendChild(document.createTextNode(manufacturer));

    let priceQuickView = document.getElementById("quickview-price").appendChild(document.createTextNode(salePrice));

    let newButton = this.createButton(sku);
    document.getElementById("quickview-button").appendChild(newButton);
  }

  createButton(sku) {
    let newButton = document.createElement("button");
    newButton.setAttribute("type", "button");
    newButton.setAttribute("data-sku", sku);
    //  newButton.setAttribute("class","view-button") //style
    //newButton.setAttribute("class","font-style") //style
    newButton.appendChild(document.createTextNode("Add To Cart"));
    newButton.addEventListener("click", this.onClickAddToCart.bind(this), false);
    /*bind, sku data is used when addind item to cart*/
    return newButton;
  }

  onClickCloseQuickViewV(e) {
     document.getElementById("modal").style.display = "none"
    document.getElementById("quickview").style.display = "none"
  }

  onClickAddToCart(e) {
    let currentSku = e.target.getAttribute("data-sku");
    this.app.cart.addItemToCart(currentSku, 1);
  }


}
