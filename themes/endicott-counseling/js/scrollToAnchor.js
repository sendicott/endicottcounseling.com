(function () { 
    var scrollToAnchor = function(anchorID) {
    // #1: find the anchor element
    var anchor = document.getElementById(anchorID);
    // #2: figure out space anchor element and top of page
    var scrollPosition = anchor.scrollTop;
    // #3: calculate height of navbar
    var headerHeight = document.querySelector(".js-header > nav").offsetHeight;
    console.log("Header Height: " + headerHeight);
    // #4: subtract height of navbar from scroll position
    var adjustedScroll = scrollPosition - headerHeight;
    // #5: scroll down to scroll position
    window.scroll(0, adjustedScroll);
    }
    scrollToAnchor("postpartum");
})();