import LoanCtrl from '../controller/loanCtrl.js';
import AmmortizeCtrl from '../controller/ammortizeCtrl';

export default {
    toLoan: function () {
        LoanCtrl.init();
    },
    toAmmortization: function(){
        AmmortizeCtrl.init();
    }
};
