import AddLoanCtrl from './controller/addLoanCtrl.js';

(function () {
	routie({
			'/shops' () {
				AddLoanCtrl.init();
			},
			'*' () {
				AddLoanCtrl.init();
			}
	});
})();
