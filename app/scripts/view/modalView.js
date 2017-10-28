import DomEventHandler from '../common/domEventHandler.js';
import AddLoanTemplate from '../../templates/modal/addLoan.html';
import AddLoanDomEvents from '../dom-events/addLoanDOMEvents.js';

export default {
	render () {
		this.registerDOMEvents();
	},

	registerDOMEvents(){
		DomEventHandler.renderMyTemplate('modalCntr', AddLoanTemplate);


	}
};
