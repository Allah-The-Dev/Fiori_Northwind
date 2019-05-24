/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"Fiori_Northwind_Namespace/Fiori_Northwind/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});