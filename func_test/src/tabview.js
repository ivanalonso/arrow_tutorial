YUI.add("media-tabview", function (Y) {
    Y.namespace("Media");

    Y.Media.TabView = {
        load : function(tabid) {
            var tabview = new Y.TabView({srcNode: tabid});
            tabview.render();
        }
    }
}, "0.1", {requires:["tabview"]});

