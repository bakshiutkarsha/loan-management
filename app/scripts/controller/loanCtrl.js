import LoanView from '../view/loanView.js';
import Storage from '../common/webStorage';
import Constants from '../common/constants';

export
default {
    init: function() {
        this.render();
    },

    render: function() {
        LoanView.render(Storage.getCollection(Constants.STOARGE_ALL_LOANS));
    }
}
