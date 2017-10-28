import DomEventHandler from '../common/domEventHandler.js';
import LoanTemplate from '../../templates/ammortization.html';
//import LoanDomEvents from '../dom-events/loanDOMEvents.js';

export default {
	render () {
		this.registerDOMEvents();
	},

	registerDOMEvents(){
		DomEventHandler.renderMyTemplate('globalCntr', LoanTemplate);

		//DomEventHandler.bindEvent('upload-button', 'click', LoanDomEvents.openLoanModal);
	}
};
