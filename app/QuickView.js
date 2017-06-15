import QuickViewView from './QuickViewView';

export default class QuickView {
  constructor(quickViewView) {
    this.quickViewView = quickViewView;
    //console.log("QuickView js");
  }

  getSku(sku) {
    /*carousel to quick view view*/
    this.quickViewView.matchItemSku(sku);
    //console.log(sku);
  }
}
