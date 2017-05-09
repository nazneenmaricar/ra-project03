// import App from './App';
import QuickViewView from './QuickViewView';

export default class QuickView {
  constructor(quickViewView) {
    this.quickViewView = quickViewView;
    //console.log("QuickView yaaay!!!!");
  }

  getSku(sku) {
    this.quickViewView.usethistomatchproductsku(sku);
    console.log(sku);
    /*carousel to quick view view*/
  }
}
