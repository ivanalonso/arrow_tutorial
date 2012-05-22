/*
 * This YUI module validate the Media Most Popular Module
 * This is a smoke test module, so all of the tests here are smoke-like
 * Note the module simply takes care of the test setup, creating a suite,
 * and adding tests to it.
 */
YUI({ useBrowserConsole: true }).use("media-most-popular-library", function(Y) {

    // Get access to the Media Most Popular Module
    var mediaMostPop = "#mediamostpopular";
    var mediaMostPopNode = Y.one(document.body).one(mediaMostPop);

    //Get access to mediamostpopular-lib.js
    var mostPopTest = Y.Media.Test.MediaMostPopular;

    //Create a test suite and name it "Media Most Popular Test suite"
    var suite = new Y.Test.Suite("Smoke - Media Most Popular Test suite");
    
    suite.add(new Y.Test.Case({
        "test module is present on page": function() 
        {
    		//Use the valdiatePresence method to test this
    		mostPopTest.validatePresence(mediaMostPopNode);
        }
    }));

    //Never "run" the tests, simply add them to the suite. Arrow takes care of running them
    Y.Test.Runner.add(suite);
});

