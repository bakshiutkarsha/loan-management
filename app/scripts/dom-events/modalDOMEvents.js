import ModalView from '../view/modalView';
import LoanModel from '../model/loansModel';
import LoanView from '../view/loanView';
import Guid from '../common/guid';

export default{
  closeModal: function(e){
    if($('body').find('.bgOverlay')){
      if($(e.target).attr('class') == 'bgOverlay' || $(e.target).attr('class') == 'close-modal'){
        ModalView.renderNoModal();
      }
    }
  },

  saveFormDetails: function(){
    let formData = {
      'name' : $('#name').val(),
      'contact': $('#contact').val(),
      'address': $('#address').val(),
      'loanAmount':$('#amount').val(),
      'term': $('#term').val(),
      'dDate': $('#d-date').val(),
      'rDate': $('#r-date').val(),
      'rateOfInterest': $('#roi').val(),
      'id': Guid.newGuid()
    }
    LoanModel.setAllLoans(formData);
    console.log(LoanModel.getAllLoans());
    LoanView.renderLoanTable(LoanModel.getAllLoans());
  },

  enableSubmitButton: function(){
    let feildArr = ['#name','#contact', '#address', '#amount', '#term', '#d-date', '#r-date', '#roi']
    for(var i = 0; i < feildArr.length; i++){
      if($(feildArr).val().length == 0){
        return;
      } else {
        $('#save-form').addClass('active');
        $('#save-form').removeAttr('disabled');
      }
    }
  }
}
