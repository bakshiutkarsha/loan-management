import RouteHandler from './common/routeHandler';
import Constants from './common/constants';

(function () {
	let routeConfig = {};
  routeConfig[Constants.TO_LOAN] = RouteHandler.toLoan;
	routeConfig[Constants.TO_AMMORTIZATION] = RouteHandler.toAmmortization;
	routeConfig['*'] = RouteHandler.toLoan;
	routie(routeConfig);

})();
