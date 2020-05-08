const TYPE_BADGR = 0;
const TYPE_LOCAL = 1;
const TYPE_BADGR_CUSTOM = 2;

const CAT_FEATURED = "Featured";
const CAT_OPENBADGES = "Open Badges";
const CAT_TEST = "Test";

//The data of all the badges
const badgeData = {
    "Badge: Badgr Web Explorer": {
        type: TYPE_BADGR_CUSTOM,
        id: "nhztqxJeT1OaiM8-KhAkLA",
        awarded: "Apr 30, 2020",
        categories: [CAT_FEATURED, CAT_OPENBADGES],
    },
    "Badge: Badgr Webinar Attendee - May 2020": {
        type: TYPE_BADGR_CUSTOM,
        id: "tSvumhqeSR2-RjsQvbIVmw",
        awarded: "May 6, 2020",
        categories: [CAT_FEATURED, CAT_OPENBADGES],
    },
    "test1": {
        type: TYPE_LOCAL,
        categories: [CAT_TEST],
    },
    "test2": {
        type: TYPE_LOCAL,
        categories: [CAT_TEST],
    },
    "test3": {
        type: TYPE_LOCAL,
        categories: [CAT_TEST, CAT_FEATURED],
    },
    "test5": {
        type: TYPE_LOCAL,
        categories: [CAT_TEST],
    },
    "test6": {
        type: TYPE_LOCAL,
        categories: [CAT_TEST],
    },
    "test7": {
        type: TYPE_LOCAL,
        categories: [CAT_TEST],
    },
};

//Renders the given badges on the site
function renderBadges(badgesToRender){
    var badgesString = "<h1>Badges Earned by Dirk Schut</h1><div class='row'>";

    for(badgeName in badgesToRender){
        switch(badgesToRender[badgeName].type){
            case TYPE_BADGR:
                badgesString += "<div class='col-md-4 myBadge'><iframe class='badgrBadge' src='" + badgesToRender[badgeName].src + "' title='" + badgeName + "'></iframe>";
                break;
            case TYPE_LOCAL:
                badgesString += "<div class='col-md-4 myBadge testBadge'><h3>" + badgeName + "</h3>";
                break;
            case TYPE_BADGR_CUSTOM:
                badgesString += "<div class='col-md-4 myBadge'>";
                badgesString += "<img class='badgeImg' src='https://api.badgr.io/public/assertions/" + badgesToRender[badgeName].id + "/image'>";
                badgesString += "<h3>" + badgeName + "</h3>";
                badgesString += "<p>Awarded: " + badgesToRender[badgeName].awarded + "</p>";
                badgesString += "<a class='btn btn-primary' role='button' target='_blank' href='https://badgecheck.io?url=https://api.badgr.io/public/assertions/" + badgesToRender[badgeName].id + "?identity__email=dschut%40outlook.com'>Verify</a>";
                break;
        }

        badgesString += "<ul class='badgesCategories'>"
        for(category in badgesToRender[badgeName].categories){
            badgesString += "<li>" + badgesToRender[badgeName].categories[category] + "</li>";
        }
        badgesString += "</ul>";

        badgesString += "</div>";
    }


    badgesString += "</div>";
    $("main").html(badgesString);
}

//Renders the about page
function renderAbout(){
    var aboutString = "<h1>About</h1>";
    aboutString += "<p>This is a project by me, <a href='https://github.com/mrDLSable'>Dirk Schut</a>, to showcase my <a href='https://openbadges.org/'> Open Badges</a> badges, and to show that I have some competency in web development for the <a href='https://badgecollect.app/badges/28f940d61f913065a2a0aa34c2b3c1cd'>Introductie Web & Mobile</a> (Introduction Web & Mobile) badge.</p>";
    $("main").html(aboutString);
}

//Load the page with the given page ID
function loadPage(pageID){
    console.log("loading page: " + pageID);
    localStorage.setItem("pageID", pageID)
    switch(pageID){
        case "allBadges":
            renderBadges(badgeData);
            break;
        case "about":
            renderAbout();
            break;
        default:
            console.log("Unknown page ID: " + pageID + ".");
            loadPage("allBadges");
            break;
    }
}

//Waits for the page to be loaded
$(document).ready(function() {
    loadPage(localStorage.getItem("pageID"));
});