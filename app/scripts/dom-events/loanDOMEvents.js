import Storage from '../common/webStorage.js';
import Utils from '../common/utils.js';
import ModalView from '../view/modalView.js'


let toggleViewMore  = function () {
  $(this).parents('.settlement-row').toggleClass('active');
}

let openLoanModal = function(){
  ModalView.render();
}

export default {
  toggleViewMore:toggleViewMore,
  openLoanModal:openLoanModal
}
