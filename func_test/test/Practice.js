/**
 * Created with JetBrains WebStorm.
 * User: ivan
 * Date: 5/2/12
 * Time: 3:03 PM
 * To change this template use File | Settings | File Templates.
 */

YUI().use('node', 'io-base', function (Y) {
    var bodyNode = Y.one("#mediablistmixednewsforyoucatemp");
    console.log(bodyNode);

    var title = Y.all("#mediablistmixednewsforyoucatemp h3").get('textContent');
    console.log("Title: " + title);



    Y.io('https://github.com/api/v2/json/user/show/yui', {
        on: {
            complete: function(id, e) {
                var json = JSON.parse(e.responseText);
                console.log(json);
            }
        }
    });



});
