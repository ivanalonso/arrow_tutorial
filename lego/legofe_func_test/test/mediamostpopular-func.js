/*
 * This YUI module validate the Media Most Popular Module
 * This is a smoke test module, so all of the tests here are func-like
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
    var suite = new Y.Test.Suite("Func - Media Most Popular Test suite");
    
    //Confirm the text on the module is correct
    suite.add(new Y.Test.Case({
        "test text module is correct": function() 
        {
    		var currentTitle = "Most Popular - World";
    		//Use the valdiatePresence method to test this
    		mostPopTest.validateTextTitle(mediaMostPopNode, currentTitle);
        }
    }));
    
    //Confirm the link on the title of the module takes us to the correct page and is clickable
    suite.add(new Y.Test.Case({
        "test I can click on the module": function() 
        {
    		//Use the validateLinkIsCorrect method to make sure we would be taken to the correct page
    		//Since the validateLinkIsCorrect method checks for the href attribute, we can assume it's clickable
    		mostPopTest.validateLinkIsCorrect(mediaMostPopNode.one("a"), "http://news.yahoo.com/world/most-popular/");
        }
    }));    

    //Confirm link count is accurate 
    suite.add(new Y.Test.Case({
        "test link count is correct": function() 
        {
    		//locate the UL set in our module. In this case we append the original node, MediaMostPopNode
    		//With the CSS locator pointing to the UL element
    		mostPopTest.validateLinkCount(mediaMostPopNode.one(".yom-list"), 7);
        }
    })); 
    
    //Confirm links are not null 
    suite.add(new Y.Test.Case({
        "test links are valid": function() 
        {
    		//locate the UL set in our module. In this case we append the original node, MediaMostPopNode
    		//With the CSS locator pointing to the UL element
    		mostPopTest.validateLinksTextNotNull(mediaMostPopNode.one(".yom-list"));
        }
    })); 

    //Never "run" the tests, simply add them to the suite. Arrow takes care of running them
    Y.Test.Runner.add(suite);
});

