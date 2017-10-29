import DomEventHandler from '../common/domEventHandler.js';
import AddLoanTemplate from '../../templates/modal/addLoan.html';
import ModalDomEvents from '../dom-events/ModalDomEvents.js';

export default {
	render () {
		this.registerDOMEvents();
	},

	registerDOMEvents(){
		DomEventHandler.renderMyTemplate('modalCntr', AddLoanTemplate);
		DomEventHandler.bind('body', 'click', ModalDomEvents.closeModal);
		DomEventHandler.bindEvent('save-form', 'click', ModalDomEvents.saveFormDetails);

		//KEYUP EVENTS
		
	},

	renderNoModal: function(){
		DomEventHandler.renderMyTemplate('modalCntr', '');
	}
};
