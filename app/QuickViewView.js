import App from './App';
//import QuickView from './QuickView';

export default class QuickViewView {
  constructor(app) {
    this.app = app;
      //console.log(this.app);
  }

  matchItemSku(sku) {
    //console.log(sku);
    let allProducts = this.app.allProducts.productList;
    for (let x = 0; x < allProducts.length; x++) {
      if (sku == allProducts[x].sku) {
        let prodImage = allProducts[x].image;
        let prodName = allProducts[x].name;
        let prodManufacturer = allProducts[x].manufacturer;
        let prodDescription = allProducts[x].longDescription;
        let prodSalePrice = allProducts[x].salePrice;
        let prodSku = allProducts[x].sku;
        this.createQuickView(prodImage, prodName, prodManufacturer, prodDescription, prodSalePrice, prodSku);
      }
    };
  }
  createQuickView(image, name, manufacturer, longDescription, salePrice, sku) {

    document.getElementById("qv-modal").style.display = "block";
    document.getElementById("quickview").style.display = "block";

    let closeQuickView =
    document.getElementById("quickview-close").appendChild(document.createTextNode("Close (X)"));
    document.getElementById("quickview-close").addEventListener("click", this.onClickCloseQuickViewView, false);

    let imageQuickView = document.getElementById("quickview-image").setAttribute("src", image);

    let priceQuickView = document.getElementById("quickview-price").appendChild(document.createTextNode(salePrice));

    let manufacturerQuickView = document.getElementById("quickview-manufacturer").appendChild(document.createTextNode(manufacturer));

    let descriptionQuickView = document.getElementById("quickview-description").appendChild(document.createTextNode(longDescription));

    let nameQuickView = document.getElementById("quickview-name").appendChild(document.createTextNode(name));

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
    /*bind, sku data is used when adding item to cart*/
    return newButton;
  }

  onClickCloseQuickViewView(e) {
     document.getElementById("qv-modal").style.display = "none";
     document.getElementById("quickview").style.display = "none";
     document.getElementById("quickview-close").innerHTML = "";
     document.getElementById("quickview-image").innerHTML = "";
     document.getElementById("quickview-price").innerHTML = "";
     document.getElementById("quickview-manufacturer").innerHTML = "";
     document.getElementById("quickview-description").innerHTML = "";
     document.getElementById("quickview-name").innerHTML = "";
     document.getElementById("quickview-button").innerHTML = "";
  }

  onClickAddToCart(e) {
    let currentSku = e.target.getAttribute("data-sku");
    this.app.cart.addItemToCart(currentSku, 1);
  }
}
