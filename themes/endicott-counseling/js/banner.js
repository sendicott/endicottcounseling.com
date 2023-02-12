// check for 'bannerClosed' in localStorage and if it's true, hide the banner
if (localStorage.getItem('bannerClosed')) {
    document.querySelector('[data-banner]').classList.add('d-none');
} else {
    // grab banner from data-banner attribute and make it stay closed after it's been closed once
    const banner = document.querySelector('[data-banner]');
    banner.addEventListener('click', function() {
        this.classList.add('d-none');
        localStorage.setItem('bannerClosed', true);
    });
}