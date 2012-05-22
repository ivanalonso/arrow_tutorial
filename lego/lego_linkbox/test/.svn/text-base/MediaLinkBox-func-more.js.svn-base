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
    
    
//    suite.add(new Y.Test.Case({
//        "test the more link is working": function() 
//        {
////        var uri = "http://news.yahoo.com";
//
//        // Define a function to handle the response data.
////        function complete(id, o, args) {
////            var id = id; // Transaction ID.
////            var data = o.responseText; // Response data.
////            var args = args[1]; // 'ipsum'.
////        };
//
//        // Subscribe to event "io:complete", and pass an array
//        // as an argument to the event handler "complete", since
//        // "complete" is global.   At this point in the transaction
//        // lifecycle, success or failure is not yet known.
// //       Y.on('io:complete', complete, Y, ['lorem', 'ipsum']);
//
//        // Make an HTTP request to 'get.php'.
//        // NOTE: This transaction does not use a configuration object.
////        var request = Y.io(uri);
////        console.log(request.status);
//        }
//    }));    
    



    //Never "run" the tests, simply add them to the suite. Arrow takes care of running them
    Y.Test.Runner.add(suite);
});

