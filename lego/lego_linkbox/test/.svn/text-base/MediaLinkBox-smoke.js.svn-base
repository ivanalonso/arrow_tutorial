/*
 * This YUI module validate the Media Linkbox Module
 * This is a smoke test module, so all of the tests here are smoke-like
 * Note the module simply takes care of the test setup, creating a suite,
 * and adding tests to it.
 */
YUI({ useBrowserConsole: true }).use("media-linkbox-library", function(Y) {

    // Get access to the Media Most Popular Module
    var mediaLinkbox = "#medialinkbox";
    var mediaLinkboxNode = Y.one(document.body).one(mediaLinkbox);

    //Get access to linkbox-lib.js
    var linkboxTest = Y.Media.Test.MediaLinkbox;

    //Create a test suite and name it "Media Most Popular Test suite"
    var suite = new Y.Test.Suite("Smoke - Media Linkbox Test suite");
    
    suite.add(new Y.Test.Case({
        "test module is present on page": function() 
        {
    		//In the Java version the smoke tests performs various checks. We'll minic those here. 
    		//We'll even use the assertion comments as comments for this file
    		//Verify that the MediaLinkbox Module is present
    		linkboxTest.validatePresence(mediaLinkboxNode);
    		
    		//Verify that the MediaLinkbox full content block is properly displayed
    		linkboxTest.validatePresence(mediaLinkboxNode.one(".bd"));
    		
    		//Verify that the MediaLinkbox module first content block is present
    		linkboxTest.validatePresence(mediaLinkboxNode.one(".bd li"));
    		
    		//Verify that the MediaLinkbox module last content block is present
    		linkboxTest.validatePresence(mediaLinkboxNode.one(".bd li:last-child,"));    		
        }
    }));

    //Never "run" the tests, simply add them to the suite. Arrow takes care of running them
    Y.Test.Runner.add(suite);
});

