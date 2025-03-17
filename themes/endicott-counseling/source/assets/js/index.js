(function () { 
    const scrollToAnchor = (anchorID) => {
        // #1: find the anchor element
        let anchor = document.getElementById(anchorID);

        if (!anchor) return;
        // #2: figure out space anchor element and top of page
        let scrollPosition = anchor.scrollTop;
        // #3: calculate height of navbar
        let headerHeight = document.querySelector(".js-header > nav").offsetHeight;
        // #4: subtract height of navbar from scroll position
        let adjustedScroll = scrollPosition - headerHeight;
        // #5: scroll down to scroll position
        window.scroll(0, adjustedScroll);
    }

    scrollToAnchor("postpartum");
})();