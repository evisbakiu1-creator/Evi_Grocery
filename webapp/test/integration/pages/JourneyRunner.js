sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"groceryproject/test/integration/pages/GroceryList",
	"groceryproject/test/integration/pages/GroceryObjectPage"
], function (JourneyRunner, GroceryList, GroceryObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('groceryproject') + '/test/flp.html#app-preview',
        pages: {
			onTheGroceryList: GroceryList,
			onTheGroceryObjectPage: GroceryObjectPage
        },
        async: true
    });

    return runner;
});

