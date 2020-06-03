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
        icon: "data:image/jpeg;base64,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",
        categories: [CAT_FEATURED, CAT_COMPSCI],
    },
    "Introductie Web & Mobile": {
        type: TYPE_BADGECOLLECT_CUSTOM,
        id: "14b5a9e63ed61486ef07df9683355bc3",
        awarded: Date.parse("May 20, 2020"),
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGNpcmNsZSBmaWxsPSIjZmZkYzAwIiBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiPjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLDEyKSBzY2FsZSgwLjkpIHRyYW5zbGF0ZSgtMTIsLTEyKSIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9IiNmZmRjMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLDEyKSBzY2FsZSgwLjgpIHRyYW5zbGF0ZSgtMTIsLTEyKSIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIj48L2NpcmNsZT48cGF0aCBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJzY2FsZSgwLjA0NTQ1LCAtMC4wNDU0NSkgdHJhbnNsYXRlKDcsIC00NTUuNSkgdHJhbnNsYXRlKDI2NCwyMDApIHNjYWxlKDAuNykgdHJhbnNsYXRlKC0yNjQsLTIwMCkiIGQ9Ik04My41IDM4NGgxNy41bDMxMCAtMC41aDE3LjVsLTEuNSAtMTdsLTI4LjUgLTMxN2wtMSAtMTFsLTEwLjUgLTNsLTEyNyAtMzVsLTQuNSAtMWwtNCAxbC0xMjcgMzUuNWwtMTAuNSAzbC0xIDExbC0yOCAzMTYuNXpNMTE4LjUgMzUybDI1LjUgLTI4OC41bDExMiAtMzFsMTExLjUgMzFsMjYgMjg4ek0xNTcgMzA0aDk5aDk5bC0zLjUgLTM5LjVoLTE1MS41bDMuNSAtNDAuNWgxNDQuNWwtMTEgLTEyMS41bC04MSAtMjIuNWgtMC41bC04MSAyMi41CmwtNS41IDYzLjVoNDBsMi41IC0zM2w0NCAtMTJoMC41bDQ0IDEybDQuNSA1MS41aC00OC41aC04OC41eiI+PC9wYXRoPjwvc3ZnPg==",
        categories: [CAT_FEATURED, CAT_COMPSCI],
    },
    "Introductie Kali Linux OS": {
        type: TYPE_BADGECOLLECT_CUSTOM,
        id: "84a3bfd5ed7427c9555af085e080462a",
        awarded: Date.parse("June 03, 2020"),
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGNpcmNsZSBmaWxsPSIjZmY4NTFiIiBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiPjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLDEyKSBzY2FsZSgwLjkpIHRyYW5zbGF0ZSgtMTIsLTEyKSIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9IiNmZjg1MWIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLDEyKSBzY2FsZSgwLjgpIHRyYW5zbGF0ZSgtMTIsLTEyKSIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIj48L2NpcmNsZT48cGF0aCBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJzY2FsZSgwLjA0NTQ1LCAtMC4wNDU0NSkgdHJhbnNsYXRlKDcsIC00NTUuNSkgdHJhbnNsYXRlKDI2NCwyMDApIHNjYWxlKDAuNykgdHJhbnNsYXRlKC0yNjQsLTIwMCkiIGQ9Ik04MCAzNTJoMTZoMzIwaDE2di0xNnYtMjAxbDM2LjUgLTM3YzcuMjQzMTYgLTcuMjQzMTYgMTEuNSAtMTcuMjYxNyAxMS41IC0yNy41YzAgLTIxLjE0MTYgLTE3LjM1ODQgLTM4LjUgLTM4LjUgLTM4LjVoLTM3MWMtMjEuMTQxNiAwIC0zOC41IDE3LjM1ODQgLTM4LjUgMzguNWMwIDEwLjIzODMgNC4yNTY4NCAyMC4yNTY4IDExLjUgMjcuNWwzNi41IDM3djIwMXYxNnpNMTEyIDMyMHYtMTc2aDI4OHYxNzZoLTI4OHpNMTAzIDExMgpsLTM3IC0zNi41Yy0xLjIzNzMgLTEuMjM3MyAtMiAtMy4yMzgyOCAtMiAtNWMwIC0zLjg1MDU5IDIuNjQ5NDEgLTYuNSA2LjUgLTYuNWgzNzFjMy44NTA1OSAwIDYuNSAyLjY0OTQxIDYuNSA2LjVjMCAxLjc2MTcyIC0wLjc2MjY5NSAzLjc2MjcgLTIgNWwtMzcgMzYuNWgtMzA2eiI+PC9wYXRoPjwvc3ZnPg==",
        categories: [CAT_FEATURED, CAT_COMPSCI],
    },
    "test1": {
        type: TYPE_LOCAL,
        awarded: Date.parse("Jan 1, 2020"),
        categories: [CAT_TEST],
    },
    "test2": {
        type: TYPE_LOCAL,
        awarded: Date.parse("Jan 1, 2020"),
        categories: [CAT_TEST],
    },
    "test3": {
        type: TYPE_LOCAL,
        awarded: Date.parse("Jan 1, 2020"),
        categories: [CAT_TEST, CAT_FEATURED],
    },
    "test5": {
        type: TYPE_LOCAL,
        awarded: Date.parse("Jan 1, 2020"),
        categories: [CAT_TEST],
    },
    "test6": {
        type: TYPE_LOCAL,
        awarded: Date.parse("Jan 1, 2020"),
        categories: [CAT_TEST],
    },
    "test7": {
        type: TYPE_LOCAL,
        awarded: Date.parse("Jan 1, 2020"),
        categories: [CAT_TEST],
    },
};

//Returns the HTML for the given badges array
function getBadgesString(badgesToRender){

    //Sort badges by date in descending order
    let sortable = [];
    for(badgeName in badgesToRender){
        sortable.push([badgeName, badgesToRender[badgeName].awarded]);
    }
    sortable.sort(function(a, b){
        return b[1] - a[1];
    });

    let badgesString = "<div class='row'>";

    for(tempID in sortable){
        let badgeName = sortable[tempID][0];
        switch(badgesToRender[badgeName].type){
            case TYPE_BADGR:
                badgesString += "<div class='col-md-4 myBadge'><iframe class='badgrBadge' src='" + badgesToRender[badgeName].src + "' title='" + badgeName + "'></iframe>";
                break;
            case TYPE_LOCAL:
                badgesString += "<div class='col-md-4 myBadge testBadge'><h3>" + badgeName + "</h3>";
                badgesString += "<p>Awarded: " + new Date(badgesToRender[badgeName].awarded).toDateString() + "</p>";
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
                badgesString += "<img class='badgeImg' src='" + badgesToRender[badgeName].icon + "'>";
                badgesString += "<h3>" + badgeName + "</h3>";
                badgesString += "<p>Awarded: " + new Date(badgesToRender[badgeName].awarded).toDateString() + "</p>";
                badgesString += "<a class='btn btn-primary' role='button' target='_blank'>Verify</a>";
                badgesString += "<a class='btn btn-secondary' role='button' target='_blank' href='https://badgecollect.app/profile/" + BADGECOLLECTPROFILE + "?assertion=" + badgesToRender[badgeName].id + "'>BadgeCollect</a>";
                break;
        }

        badgesString += "<div class='badgesCategories'>";
        let first = true;
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
    //I could have used document.getElementById("main").innerHTML instead
    $("main").html(pageString);
}

//Renders the about page
function renderAbout(){
    let aboutString = "<h1>About</h1>";
    aboutString += "<p>This is a project by me, <a href='https://github.com/mrDLSable'>Dirk Schut</a>, to showcase my <a href='https://openbadges.org/'> Open Badges</a> badges, and to show that I have some competency in web development for the <a href='https://badgecollect.app/badges/28f940d61f913065a2a0aa34c2b3c1cd'>Introductie Web & Mobile</a> (Introduction Web & Mobile) badge.</p>";
    aboutString += "<p>Regarding the test badges: They are there purely so that the system feels a bit more filled and for testing purposes. They will be removed once I earn more proper badges.</p>";
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
//I could have used a self-executing function or a function with a timeout that checks document.readyState
$(document).ready(function() {
    loadPage(localStorage.getItem("pageID"));
});