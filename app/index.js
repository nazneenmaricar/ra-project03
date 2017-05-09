

require('./main.scss');
//console.log("implemented sasser");

// this ensures that index.html is updated with webpack
var indexer = require('file-loader?name=../dist/index.html!./index.html');
//console.log("copied index.html");

import App from './App';

let app = new App();
app.init();
//console.log(app);
//console.log("reading index.js complete...");
