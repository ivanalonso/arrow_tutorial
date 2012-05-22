/*
 * The purpose of this file is to behave as a library for all Media Linkbox tests
 * These tests should not take the dom into account. This means the tests can be re-used
 */
YUI.add("media-linkbox-library", function(Y) {

    var A = Y.Assert;

    var self = Y.namespace("Media.Test").MediaLinkbox = 
    {
    	//Confirm module is present 
    	//We check by making sure the node is not null
        validatePresence: function(node) 
        {
    		A.isNotNull(node, "Confirm Module is present");
        },

        //Get the text on the title of the module, and check it against what we expect
        validateText: function(node, nodeText)
        {
        	//Create a simple var to store the "textContent"
        	//We know the value is under the em element and so we append the node object with that info
        	var actualTitle = node.one("a").get("textContent");
        	A.areEqual(nodeText, actualTitle, "Confirm Text Matches")
        },
        
        //Validate the "link" attribute of an element
        validateLinkIsCorrect: function(node, expURL)
        {
        	//We assume the node given to us is taking us to the link
        	//Now we need to ask YUI to get us the "href" attribute's value
            var attribute = node.get("href");
            A.areEqual(expURL, attribute, "Confirm the link is as expected");
        },
        
        //Validate Link count
        //We expect the node to take us to the UL element. This means we'll need to append the LI element
        validateLinkCount: function(node, expCount)
        {
        	//Because we want to "ALL" of the LI values, we use .all instead of .one
        	//More documentation about .all is here: http://yuilibrary.com/yui/docs/api/classes/Node.html#method_all
        	var links = node.all("li");
        	A.areEqual(expCount, links.size(), "Confirm the number of links is as expected");
        },
        
        //Confirm the text on the links of the module is not null
        validateLinksTextNotNull: function(node)
        {
        	//get ALL of the links in the node 
        	var links = node.all("li");
        	
        	//Loop through the links and make sure they have text in them
        	for (var i = 0; i < links.size(); i++)
        	{
        		//Our assertion is simply to make sure the value returned is a string
        		//Links is a nodeList, and to access individual values we use "item"
        		//Each item's text is under the "a" element
        		A.isString(links.item(i).one("a").get("text"), "Confirm the links are not empty");
        		Y.log(links.item(i).one("a").get("text"));
        	}
        }
        
   
    };
}, "0.1", { requires:["arrow"]});
