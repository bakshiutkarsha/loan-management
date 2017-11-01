import LoanView from '../view/loanView.js';
import Storage from '../common/webStorage';
import Constants from '../common/constants';

export
default {
    init: function() {
        this.render();
        // console.log((this.pmt(0.00833, 12, -10000)).toFixed(2));
        // console.log(JSON.stringify(this.computeSchedule(10000, 10, 12, 1, 879.14), 0, 4))
    },

    render: function() {
        LoanView.render(Storage.getCollection(Constants.STOARGE_ALL_LOANS));
    },

    pmt: function(rate,nper,pv) {
        var pvif, pmt;

      pvif = Math.pow( 1 + rate, nper);
      pmt = rate / (pvif - 1) * -(pv * pvif);
      return pmt;
    },

    computeSchedule:function (loan_amount, interest_rate, payments_per_year, years, payment) {
        var schedule = [];
        var remaining = loan_amount;
        var number_of_payments = payments_per_year * years;

        for (var i=0; i<=number_of_payments; i++) {
            var interest = remaining * (interest_rate/100/payments_per_year);
            var principle = (payment-interest);
            var row = [i, principle>0?principle:0, interest>0?interest:0, remaining>0?remaining:0];
            schedule.push(row);
            remaining -= principle
        }

        return schedule;
    }

}
