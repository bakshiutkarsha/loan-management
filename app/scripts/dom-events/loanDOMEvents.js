import Storage from '../common/webStorage.js';
import Utils from '../common/utils.js';
import ModalView from '../view/modalView.js';
import Constants from '../common/constants';
import AmmortizeView from '../view/ammortizeView';

let toggleViewMore = function() {
    $(this).parents('.settlement-row').toggleClass('active');
}

let openLoanModal = function() {
    ModalView.render();
}

let getAmmortizeTable = function() {
    let id = $(this).data('id');
    let selectedRow = _.find(Storage.getCollection(Constants.STOARGE_ALL_LOANS), {
        'id': id
    });
    pmt(selectedRow.rateOfInterest / 100 / selectedRow.term, selectedRow.term * 1, -selectedRow.loanAmount, selectedRow);
}

let pmt = function(rate, nper, pv, selectedRow) {
    let pvif, pmt;
    pvif = Math.pow(1 + rate, nper);
    pmt = rate / (pvif - 1) * -(pv * pvif);
    computeSchedule(selectedRow.loanAmount, selectedRow.rateOfInterest, selectedRow.term, 1, pmt, selectedRow);
}

let computeSchedule = function(loan_amount, interest_rate, payments_per_year, years, payment, selectedRow) {
    var schedule = [];
    var remaining = loan_amount;
    var number_of_payments = payments_per_year * years;

    for (var i = 0; i <= number_of_payments -1; i++) {
        var interest = remaining * (interest_rate / 100 / payments_per_year);

        var principle = (payment - interest);
        var ending = remaining - principle
        ending = Math.abs(ending)

        var row = [i, principle > 0 ? principle : 0, interest > 0 ? interest : 0, interest > 0 ? remaining : 0, ending];
        schedule.push(row);
        remaining -= principle
    }

    let pageData = {
        'personalInfo': selectedRow,
        'ammortizeTable': schedule
    }
    AmmortizeView.render(pageData);
}


export default {
    toggleViewMore: toggleViewMore,
    openLoanModal: openLoanModal,
    getAmmortizeTable: getAmmortizeTable
}
