/*
 * This YUI module validate the Media Linkbox Module
 * This is a smoke test module, so all of the tests here are smoke-like
 * Note the module simply takes care of the test setup, creating a suite,
 * and adding tests to it.
 */
YUI({ useBrowserConsole: true }).use("media-linkbox-library", function(Y) {

    // Get access to the Media Most Popular Module
    var mediaNavBox = "#media-list-navbox";
    var mediaNavBoxNode = Y.one(document.body).one(mediaNavBox);

    //Get access to linkbox-lib.js
    var navBoxTest = Y.Media.Test.MediaLinkbox;

    //Create a test suite and name it "Media Most Popular Test suite"
    var suite = new Y.Test.Suite("Smoke - Media NavBox Test suite");
    
    suite.add(new Y.Test.Case({
        "test module is present on page": function() 
        {
    		//In the Java version the smoke tests performs various checks. We'll minic those here. 
    		//We'll even use the assertion comments as comments for this file
    		//Verify that the MediaNavBox Module is present
    		navBoxTest.validatePresence(mediaNavBoxNode);
    		
    		//Verify that the MediaNavBox full content block is properly displayed
    		navBoxTest.validatePresence(mediaNavBoxNode.one(".bd"));
    		
    		//Verify that the MediaNavBox module first content block is present
    		navBoxTest.validatePresence(mediaNavBoxNode.one(".bd div"));
    		
    		//Verify that the MediaNavBox module last content block is present
    		navBoxTest.validatePresence(mediaNavBoxNode.one(".bd div li:last-child"));    

        }
    }));

    //Never "run" the tests, simply add them to the suite. Arrow takes care of running them
    Y.Test.Runner.add(suite);
});

