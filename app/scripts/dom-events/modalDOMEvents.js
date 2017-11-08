import ModalView from '../view/modalView';
import LoanModel from '../model/loansModel';
import LoanView from '../view/loanView';
import Guid from '../common/guid';
import Storage from '../common/webStorage';
import Constants from '../common/constants';

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
      'years': $('#years').val(),
      'id': Guid.newGuid()
    }
    LoanModel.setAllLoans(formData);
    ModalView.renderNoModal();
    LoanView.renderLoanTable(LoanModel.getAllLoans());
    $('.loan-row:nth-child(1)').addClass('highlight-row');
  },

  enableSubmitButton: function(){
      if( $('#name').val().length > 0 &&
        $('#contact').val().length > 0 &&
        $('#address').val().length > 0 &&
        $('#amount').val().length > 0 &&
        $('#term').val().length > 0 &&
        $('#d-date').val().length > 0 &&
        $('#r-date').val().length > 0 &&
        $('#years').val().length > 0 &&
        $('#roi').val().length > 0){
          $('#save-form').addClass('active');
          $('#save-form').removeAttr('disabled');
      } else {
        $('#save-form').removeClass('active');
        $('#save-form').attr('disabled', 'disabled');
      }
  }
}
