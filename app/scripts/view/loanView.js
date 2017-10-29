import DomEventHandler from '../common/domEventHandler.js';
import LoanTemplate from '../../templates/loans.html';
import LoanDomEvents from '../dom-events/loanDOMEvents.js';

export default {
	render (data) {
		this.viewModel = {};
		if(data === null){
			this.viewModel.loans =[];
		} else {
			this.viewModel.loans = data;
		}

		this.registerDOMEvents();
	},

	registerDOMEvents(){
		DomEventHandler.renderMyTemplate('globalCntr', LoanTemplate, this.viewModel);

		DomEventHandler.bindEvent('upload-button', 'click', LoanDomEvents.openLoanModal);

		DomEventHandler.bindClassEvent('show-more', 'click', LoanDomEvents.toggleViewMore);
	}
};
