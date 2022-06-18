window.onscroll = function() {
    const containerHeader = document.getElementsByClassName('container--heading')[0];
    containerHeader.classList.toggle("container--shrink", window.pageYOffset > 0);
}