/*
 * This YUI module validate the Media Linkbox Module
 * This is a smoke test module, so all of the tests here are smoke-like
 * Note the module simply takes care of the test setup, creating a suite,
 * and adding tests to it.
 */
YUI({ useBrowserConsole: true }).use("media-linkbox-library", "io-base", function(Y) {

    // Get access to the Media Most Popular Module
    var mediaLinkbox = "#medialinkbox";
    var mediaLinkboxNode = Y.one(document.body).one(mediaLinkbox);

    //Get access to linkbox-lib.js
    var linkboxTest = Y.Media.Test.MediaLinkbox;

    //Create a test suite and name it "Media Most Popular Test suite"
    var suite = new Y.Test.Suite("Func - Media Linkbox More-link Test suite");
    
    suite.add(new Y.Test.Case({
        "test the more link is working": function() 
        {
    		//In the Java version the smoke tests performs various checks. We'll minic those here. 
    		//We'll even use the assertion comments as comments for this file
    		linkboxTest.validateText(mediaLinkboxNode.one(".ft"), "More...");
    		
    		linkboxTest.validateLinkIsCorrect(mediaLinkboxNode.one(".ft a"), "/");
        }
    }));
    
    
    suite.add(new Y.Test.Case({
        "test the more link is working": function()
        {

            //Simple var to keep track fo the URI
            var uri = "http://news.yahoo.com";

            //This will simply invoke the Y.io object which will the URI as input
            //However, nothing will happen until you attach this to a event (below)
            Y.io(uri);

            //This is the function which will be called back when the Y.on event method is called
            //This function takes two params because io:complete returns two params when it gets called
            //The first param is the ID, the second is the data
            //Keep in mind both of those params are implicitily given/returned by io:complete
            var callBackFunction = function(id, data){

                console.log("ivan");
                console.log("data" + data.status);

            }

            //Y.on is a YUI function which takes at least two params, the event and the callback function
            //It can also take three and four params. The third being the context in which to execute it
            //the fourth being any additional args you want to give to the callback function
            //Remember you cannot give the callback function params back directly, you need to do it
            //indirectly
            Y.on('io:complete', callBackFunction);
        }
    }));
    



    //Never "run" the tests, simply add them to the suite. Arrow takes care of running them
    Y.Test.Runner.add(suite);
});

