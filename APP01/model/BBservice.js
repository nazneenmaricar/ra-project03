//Retriving data from Best Buy through its API in JSON format.
$(document).ready(function(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=SXkiDh8lcFEAqyG6rDmJjlH4&sort=sku.asc&show=sku,salePrice,description,image,manufacturer&format=json", true);
            xhr.send();

            xhr.addEventListener("readystatechange", processRequest, false);

            function processRequest(e) {
              if (xhr.readyState == 4 && xhr.status == 200) {
                  var result = JSON.parse(xhr.responseText);
                    content (result.products); //content will print out the details
                    //console.log(result);
              }
            }
 });

//Creating the product and its description

 function newsProduct (description, image, manufacturer, salePrice, sku) {
     var clone=$("#clone").clone();
         $(clone).find("h3").text(description);
         $(clone).find("img").attr("src": image);
         $(clone).find("h4").text(manufacturer);
         $(clone).find("p").string(salePrice);
         $(clone).find("h5").string(sku);
         //$(clone).find("a").attr("href", link);
         //console.log(contentArea);
         $(".contentArea").append($(clone).html());
 }

//Product Loop

 function content (products) {

   var n=0;
   for (var i=0; i<results.length; i++){
   newsProduct (products[i].description, products[i].image, products[i].manufacturer, products[i].salePrice, products[i].sku);
   n++;}
   console.log(n);
   console.log (products[i].description)

  }
 }

 //create product class here???????
