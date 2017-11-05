import Storage from '../common/webStorage.js';
import Utils from '../common/utils.js';
import ModalView from '../view/modalView.js';
import Constants from '../common/constants';
import AmmortizeView from '../view/ammortizeView';
import LoanModel from '../model/loansModel';
import LoanView from '../view/loanView';

let toggleViewMore = function() {
    $(this).parents('.loan-row').toggleClass('active');
}

let openLoanModal = function() {
    ModalView.render();
}

let getAmmortizeTable = function() {
    let id = $(this).data('id');
    let selectedRow = _.find(Storage.getCollection(Constants.STOARGE_ALL_LOANS), {
        'id': id
    });
    pmt(selectedRow.rateOfInterest / 100 / selectedRow.term, selectedRow.term * selectedRow.years, -selectedRow.loanAmount, selectedRow);
}

let pmt = function(rate, nper, pv, selectedRow) {
    let pvif, pmt;
    pvif = Math.pow(1 + rate, nper);
    pmt = rate / (pvif - 1) * -(pv * pvif);
    computeSchedule(selectedRow.loanAmount, selectedRow.rateOfInterest, selectedRow.term, selectedRow.years, pmt, selectedRow);
}

let computeSchedule = function(loan_amount, interest_rate, payments_per_year, years, payment, selectedRow) {
    let schedule = [];
    let remaining = loan_amount;
    let number_of_payments = payments_per_year * years;
    let paymentDate = selectedRow.rDate;
    // let djd =Utils.periodicDate('2017-12-03');
    // console.log(djd);
    for (let i = 0; i <= number_of_payments -1; i++) {
        let interest = remaining * (interest_rate / 100 / payments_per_year);

        paymentDate = Utils.periodicDate(paymentDate);
        console.log(paymentDate)
        let principle = (payment - interest);
        let ending = remaining - principle
        ending = Math.abs(ending)

        let row = [i, principle > 0 ? principle : 0, interest > 0 ? interest : 0, interest > 0 ? remaining : 0, ending, paymentDate];
        schedule.push(row);
        remaining -= principle
    }

    let pageData = {
        'personalInfo': selectedRow,
        'ammortizeTable': schedule
    }
    AmmortizeView.render(pageData);
}

let searchLoan = function(){
  LoanView.renderLoanTable(LoanModel.searchFromAllLoans($(this).val()));
}
export default {
    toggleViewMore: toggleViewMore,
    openLoanModal: openLoanModal,
    getAmmortizeTable: getAmmortizeTable,
    searchLoan:searchLoan
}
