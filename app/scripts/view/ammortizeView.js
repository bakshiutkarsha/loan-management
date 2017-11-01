import DomEventHandler from '../common/domEventHandler.js';
import LoanTemplate from '../../templates/ammortization.html';
//import LoanDomEvents from '../dom-events/loanDOMEvents.js';

export default {
	render (data) {
		console.log(data);
		this.viewModel = data;
		this.registerDOMEvents();
	},

	registerDOMEvents(){
		DomEventHandler.renderMyTemplate('globalCntr', LoanTemplate, this.viewModel);

		//DomEventHandler.bindEvent('upload-button', 'click', LoanDomEvents.openLoanModal);
	}
};
