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
		DomEventHandler.bindEvent('name', 'keyup', ModalDomEvents.enableSubmitButton);
		DomEventHandler.bindEvent('contact', 'keyup', ModalDomEvents.enableSubmitButton);
		DomEventHandler.bindEvent('address', 'keyup', ModalDomEvents.enableSubmitButton);
		DomEventHandler.bindEvent('amount', 'keyup', ModalDomEvents.enableSubmitButton);
		DomEventHandler.bindEvent('term', 'keyup', ModalDomEvents.enableSubmitButton);
		DomEventHandler.bindEvent('d-date', 'keyup', ModalDomEvents.enableSubmitButton);
		DomEventHandler.bindEvent('r-date', 'keyup', ModalDomEvents.enableSubmitButton);
		DomEventHandler.bindEvent('years', 'keyup', ModalDomEvents.enableSubmitButton);
		DomEventHandler.bindEvent('roi', 'keyup', ModalDomEvents.enableSubmitButton);
	},

	renderNoModal: function(){
		DomEventHandler.renderMyTemplate('modalCntr', '');
	}
};
