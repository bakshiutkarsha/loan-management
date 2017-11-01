import DomEventHandler from '../common/domEventHandler.js';
import LoanTemplate from '../../templates/loans.html';
import LoanTableTemplate from '../../templates/components/table.html';
import LoanDomEvents from '../dom-events/loanDOMEvents.js';

export default {
	render (data) {
		this.registerDOMEvents();
		this.renderLoanTable(data);
	},

	registerDOMEvents(){
		DomEventHandler.renderMyTemplate('globalCntr', LoanTemplate);
		DomEventHandler.bindEvent('upload-button', 'click', LoanDomEvents.openLoanModal);
		this.commonDomEvents();
	},

	renderLoanTable(data){
		this.viewModel = {};
		if(data === null){
			this.viewModel.loans =[];
		} else {
			this.viewModel.loans = data;
		}
		DomEventHandler.renderMyTemplate('loanTable', LoanTableTemplate, this.viewModel);
		this.commonDomEvents();

	},

	commonDomEvents(){
		DomEventHandler.bindClassEvent('show-more', 'click', LoanDomEvents.toggleViewMore);
		DomEventHandler.bindClassEvent('go-to-ammortize', 'click', LoanDomEvents.getAmmortizeTable);
	}
};
