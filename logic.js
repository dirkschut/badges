const TYPE_BADGR = 0;
const TYPE_LOCAL = 1;
const TYPE_BADGR_CUSTOM = 2;
const TYPE_BADGECOLLECT_CUSTOM = 3;

const CAT_FEATURED = "Featured";
const CAT_OPENBADGES = "Open Badges";
const CAT_COMPSCI = "Computer Science";
const CAT_TEST = "Test";

const BADGECOLLECTPROFILE = "1Cd3Cf1m1hPZQBhFkNeFGqNocrfRDWo1ns";
const EMAIL = "dschut@outlook.com";
const EMAILFORURL = "dschut%40outlook.com";

//The data of all the badges
const badgeData = {
    "Badge: Badgr Web Explorer": {
        type: TYPE_BADGR_CUSTOM,
        id: "nhztqxJeT1OaiM8-KhAkLA",
        awarded: Date.parse("Apr 30, 2020"),
        categories: [CAT_FEATURED, CAT_OPENBADGES],
    },
    "Badge: Badgr Webinar Attendee - May 2020": {
        type: TYPE_BADGR_CUSTOM,
        id: "tSvumhqeSR2-RjsQvbIVmw",
        awarded: Date.parse("May 6, 2020"),
        categories: [CAT_FEATURED, CAT_OPENBADGES],
    },
    "Formulieren maken met VBA (Visual basic for applications)": {
        type: TYPE_BADGECOLLECT_CUSTOM,
        id: "729e5b1f9f2f0439c8bd4635f5fa072c",
        awarded: Date.parse("May 4, 2020"),
        categories: [CAT_FEATURED, CAT_COMPSCI],
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

//Returns the HTML for the given badges array
function getBadgesString(badgesToRender){
    var badgesString = "<div class='row'>";

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
                badgesString += "<p>Awarded: " + new Date(badgesToRender[badgeName].awarded).toDateString() + "</p>";
                badgesString += "<a class='btn btn-primary' role='button' target='_blank' href='https://badgecheck.io?url=https://api.badgr.io/public/assertions/" + badgesToRender[badgeName].id + "?identity__email=" + EMAILFORURL + "'>Verify</a>";
                badgesString += "<a class='btn btn-secondary' role='button' target='_blank' href='https://badgrteam.badgr.com/public/assertions/" + badgesToRender[badgeName].id + "?identity__email=" + EMAILFORURL + "'>Badgr</a>";
                break;
            case TYPE_BADGECOLLECT_CUSTOM:
                badgesString += "<div class='col-md-4 myBadge'>";
                badgesString += "<h3>" + badgeName + "</h3>";
                badgesString += "<p>Awarded: " + new Date(badgesToRender[badgeName].awarded).toDateString() + "</p>";
                badgesString += "<a class='btn btn-primary' role='button' target='_blank'>Verify</a>";
                badgesString += "<a class='btn btn-secondary' role='button' target='_blank' href='https://badgecollect.app/profile/" + BADGECOLLECTPROFILE + "?assertion=" + badgesToRender[badgeName].id + "'>BadgeCollect</a>";
                break;
        }

        badgesString += "<div class='badgesCategories'>";
        var first = true;
        for(category in badgesToRender[badgeName].categories){
            if(first){
                first = false;
            }else{
                badgesString += ", ";
            }
            badgesString += "<a href='#' onclick='onCategoryClick(\"" + badgesToRender[badgeName].categories[category] + "\")'>" + badgesToRender[badgeName].categories[category] + "</a>";
        }
        badgesString += "</div>";

        badgesString += "</div>";
    }


    badgesString += "</div>";
    return badgesString;
}

//Returns the badges object of the badges with the given category
function getBadgesByCategory(category){
    let tempBadges = {};
    for(badgeName in badgeData){
        if(badgeData[badgeName].categories.includes(category)){
            tempBadges[badgeName] = badgeData[badgeName];
        }
    }
    return tempBadges;
}

//Renders the given badges on the site
function renderHome(){
    let pageString = "<h1>Badges earned by Dirk Schut</h1>";
    pageString += "<p>This is a portfolio of the badges I have earned in the open badges system.</p>";
    pageString += "<h2>Featured Badges</h2>";
    pageString += getBadgesString(getBadgesByCategory(CAT_FEATURED));
    $("main").html(pageString);
}

//Renders the about page
function renderAbout(){
    let aboutString = "<h1>About</h1>";
    aboutString += "<p>This is a project by me, <a href='https://github.com/mrDLSable'>Dirk Schut</a>, to showcase my <a href='https://openbadges.org/'> Open Badges</a> badges, and to show that I have some competency in web development for the <a href='https://badgecollect.app/badges/28f940d61f913065a2a0aa34c2b3c1cd'>Introductie Web & Mobile</a> (Introduction Web & Mobile) badge.</p>";
    aboutString += "<h2>Verifying BadgeCollect badges</h2><p>Right now it is not possible to verify <a href='https://badgecollect.app/'>badgecollect</a> badges with the <a href='https://badgecheck.io/'>badgecheck</a> system. I have been in contact with the team from badgecollect and they tell me that this is something they're working on.</p>";
    $("main").html(aboutString);
}

//Render the badges of a given category
function renderBadgesCategory(category){
    let pageString = "<h1>" + category + "</h1>";
    pageString += getBadgesString(getBadgesByCategory(category));
    $("main").html(pageString);
}

//Render all the badges without a filter
function renderAllBadges(){
    let pageString = "<h1>All Badges</h1>";
    pageString += getBadgesString(badgeData);
    $("main").html(pageString);
}

//Sets the category and calls the loadPage when a category is clicked
function onCategoryClick(category){
    console.log(category);
    if(checkCategoryHasBadges(category)){
        localStorage.setItem("category", category);
        loadPage("category");
    }
}

//Check to see if a given category has badges
function checkCategoryHasBadges(category){
    for(badgeName in badgeData){
        if(badgeData[badgeName].categories.includes(category)){
            return true;
        }
    }
    return false;
}

//Load the page with the given page ID
function loadPage(pageID){
    console.log("loading page: " + pageID);
    localStorage.setItem("pageID", pageID)
    switch(pageID){
        case "home":
            renderHome();
            break;
        case "about":
            renderAbout();
            break;
        case "category":
            if(!checkCategoryHasBadges(localStorage.getItem("category"))){
                localStorage.setItem("category", CAT_FEATURED);
            }
            renderBadgesCategory(localStorage.getItem("category"));
            break;
        case "allBadges":
            renderAllBadges();
            break;
        default:
            console.log("Unknown page ID: " + pageID + ".");
            loadPage("home");
            break;
    }
}

//Waits for the page to be loaded
$(document).ready(function() {
    loadPage(localStorage.getItem("pageID"));
});