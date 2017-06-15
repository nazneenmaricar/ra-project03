/*Pull data from best buy api in JSON format and converting it into text. Running it into the loop and generating results*/

import Product from "./Product";
import AllProducts from "./AllProducts";

export default class BestBuyService {
  constructor() {
    this.app = {}; //array
    this.productList = new AllProducts();
    this.xhr = new XMLHttpRequest();
    this.xhr.addEventListener("readystatechange", this.processRequest.bind(this), false);
    this.xhr.open('GET', "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=SXkiDh8lcFEAqyG6rDmJjlH4&sort=name.asc&show=name,longDescription,salePrice,sku,manufacturer,image,addToCartUrl,url&format=json", true);
    this.xhr.send();
  }
  init(app) {
    this.app = app;
    /*connected to app.js*/
  }
  processRequest(e) {
    if (e.target.readyState == 4 && e.target.status == 200) {
      //console.log(e.target.responseText);
      let result = JSON.parse(e.target.responseText);
      console.log(result); /*prints out product list*/
      this.app.allProducts = this.productList = this.contentlist(result.products);
      //console.log(this.app.allProducts);  /*this prints out the product list*/
      this.app.getData(this.app.allProducts);
      // console.log(result.products); /*this prints out the object results*/
    }
  }
  contentlist(products) {
    let list = new AllProducts();
    for (let i = 0; i < products.length; i++) {
      let newProduct = new Product();
      newProduct.image = products[i].image;
      newProduct.name = products[i].name;
      newProduct.longDescription = products[i].longDescription;
      newProduct.manufacturer = products[i].manufacturer;
      newProduct.salePrice = products[i].salePrice;
      newProduct.sku = products[i].sku;
      list.productList.push(newProduct);
      /*prints out product list*/
    }
    return list;
  }
}
