const TYPE_BADGR = 0;
const TYPE_LOCAL = 1;

//The data of all the badges
const badgeData = {
    "Badge: Badgr Web Explorer": {
        type: TYPE_BADGR,
        src: "https://api.badgr.io/public/assertions/nhztqxJeT1OaiM8-KhAkLA?embedVersion=1&amp;embedWidth=330&amp;embedHeight=186&amp;identity__email=dschut%40outlook.com",
    },
    "test1": {
        type: TYPE_LOCAL,
    },
    "test2": {
        type: TYPE_LOCAL,
    },
    "test3": {
        type: TYPE_LOCAL,
    },
    "test5": {
        type: TYPE_LOCAL,
    },
    "test6": {
        type: TYPE_LOCAL,
    },
    "test7": {
        type: TYPE_LOCAL,
    },
};

//Renders the given badges on the site
function renderBadges(badgesToRender){
    var badgesString = "<h1>Badges Earned by Dirk Schut</h1><div class='row'>";

    for(badgeName in badgesToRender){
        switch(badgesToRender[badgeName].type){
            case TYPE_BADGR:
                badgesString += "<iframe class='col-md-4 myBadge' src='" + badgesToRender[badgeName].src + "' title='" + badgeName + "'></iframe>";
                break;
            case TYPE_LOCAL:
                badgesString += "<div class='col-md-4 myBadge testBadge'><h3>" + badgeName + "</h3></div>";
                break;
        }
    }

    badgesString += "</div>";
    $("main").html(badgesString);
}

//Waits for the page to be loaded
$(document).ready(function() {
    renderBadges(badgeData);
});