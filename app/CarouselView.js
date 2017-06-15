/*Creating the carousel and CarouselView, populates current product cell for the products to be viewd on flickity*/

import Carousel from './Carousel';

export default class CarouselView {
  constructor(carousel) {
    this.carousel = carousel;
    // console.log("CarouselView!!!");
  }
  init(allProducts) {
    this.initFlickityElements(allProducts);
    /*receiving all products from bbservice*/
  }

  initFlickityElements(allProducts) {
    //console.log(allProducts);
    /*prits result in the carousel*/
    let documentFragment = new DocumentFragment();
    let startDiv = document.createElement("div");
    startDiv.setAttribute("class", "main-carousel");
    //startDiv.setAttribute ("data-flickity", "'{ "wrapAround": true }'");
    for (let i = 0; i < allProducts.length; i++) {
      //console.log("Nazneen");
      let newCell = document.createElement("div");
      newCell.setAttribute("class", "carousel-cell");
      /*creating a cell content*/
      this.createCellContent(newCell, allProducts[i]);
      startDiv.appendChild(newCell);
      /*newcell is appended to the startDiv which inturn creates carousel*/
    }
    this.createCarousel(startDiv);
  }

  createCellContent(cellContainer, currentProduct) {
    let cellBox = this.createInnerCellBox();
    /*Creating carousel for the current product*/
    /*Product Image*/
    let productImage = this.createProductImage(currentProduct);
    cellBox.appendChild(productImage);
    cellBox.appendChild(document.createElement("br"));

    /*Product Manufacturer*/
    let productManufacturer = this.createProductManufacturer(currentProduct);
    cellBox.appendChild(productManufacturer);
    cellBox.appendChild(document.createElement("br"));

    /*Product Description*/
    let productDescripton = this.createProductDescription(currentProduct);
    cellBox.appendChild(productDescripton);
    cellBox.appendChild(document.createElement("br"));

    /*Product Price*/
    let salesPrice = this.createSalesPrice(currentProduct);
    cellBox.appendChild(salesPrice);
    cellBox.appendChild(document.createElement("br"));

    /*Quick view and Add to cart button*/
    let quickViewButton = this.createQuickViewButton(currentProduct);
    cellBox.appendChild(quickViewButton);
    cellContainer.appendChild(cellBox);

    let addToCartButton = this.createAddToCartButton(currentProduct);
    cellBox.appendChild(addToCartButton);
    cellContainer.appendChild(cellBox);
  }

  createInnerCellBox() {
    let newCellBox = document.createElement("div");
    newCellBox.style.backgroundColor = "white";
    return newCellBox;
    /*creates div for the current populated product for/within a cell*/
  }

  createProductImage(currentProduct) {
    let newProductImage = document.createElement("img");
    newProductImage.src = `${currentProduct["image"]}`;
    newProductImage.setAttribute("height", "200px");
    newProductImage.setAttribute("width", "200px");
    newProductImage.setAttribute("alt", `${currentProduct["name"]}`);
    return newProductImage;

  }

  createProductManufacturer(currentProduct) {
    let newProductManufacture = document.createElement("h3");
    newProductManufacture.style.color = "black";
    let newTextContent = document.createTextNode(`${currentProduct["manufacturer"]}`);
    newProductManufacture.appendChild(newTextContent);
    return newProductManufacture;
  }

  createProductDescription(currentProduct) {
    let newProductDescription = document.createElement("p");
    newProductDescription.style.color = "black";
    let newTextContent = document.createTextNode(`${currentProduct["name"]}`);
    newProductDescription.appendChild(newTextContent);
    return newProductDescription;
  }

  createSalesPrice(currentProduct) {
    let newSalesPrice = document.createElement("p");
    newSalesPrice.style.color = "black";
    let newPriceContent = document.createTextNode(`$ ${currentProduct["salePrice"]}`);
    newSalesPrice.appendChild(newPriceContent);
    return newSalesPrice;
  }

  createQuickViewButton(currentProduct) {
    let newQuickViewButton = document.createElement("button");
    newQuickViewButton.setAttribute("data-sku", `${currentProduct["sku"]}`)
    newQuickViewButton.setAttribute("value", `${currentProduct["sku"]}`);;
    newQuickViewButton.setAttribute("type", "button");
    newQuickViewButton.setAttribute("Id", `${currentProduct["sku"]}`);
    newQuickViewButton.appendChild(document.createTextNode("QuickView"));
    //binding the button, sends the button to the event handing function. Button holds data-sku for the current product
    newQuickViewButton.addEventListener("click", this.onClickOpenQuickView.bind(this), false);
    return newQuickViewButton;
  }

//creates button and adds the current product to cart
  createAddToCartButton(currentProduct) {
    let newAddToCartButton = document.createElement("button");
    newAddToCartButton.setAttribute("data-sku", `${currentProduct["sku"]}`);
    newAddToCartButton.setAttribute("value", `${currentProduct["sku"]}`);
    newAddToCartButton.setAttribute("type", "button");
    newAddToCartButton.setAttribute("Id", `${currentProduct["sku"]}`);
    newAddToCartButton.appendChild(document.createTextNode("Add To Cart"));
    //binding the button, sends the button to the event handing function. Button holds data-sku for the current product
    newAddToCartButton.addEventListener("click", this.onClickAddToCart.bind(this), false);
    return newAddToCartButton;
  }

  onClickOpenQuickView(e) {
    //gets the button's data sku value
    // console.log("on click open quick view");
    let currentSku = e.target.getAttribute("data-sku");
    console.log(currentSku);
    this.carousel.quickViewSku(currentSku);
    //sku value is passed to the carousel
  }

  onClickAddToCart(e) {
    //gets the button's data sku value
    // console.log(e.target.getAttribute("data-sku"));
    let currentSku = e.target.getAttribute("data-sku");
    this.carousel.cartSku(currentSku);
    //sku value is passed to the carousel
  }

//incorporating Flickity function
  createCarousel(node) {

    document.getElementById("prodcell").appendChild(node);

        window.addEventListener("load", (e) => {
          console.log("page loaded");

            let elem = document.querySelector('.main-carousel');
            let f = new Flickity(elem, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: true,
            wrapAround: true
      });
    }, false);
  }
}
