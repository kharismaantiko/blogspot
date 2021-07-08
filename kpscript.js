const ytvideo = document.getElementById('ytvideo');
ytvideo.addEventListener('click', () => {
const addytvideo = document.getElementById('addytvideo');
const videourl = ytvideo.getAttribute('data-url');
const videosrc = addytvideo.getAttribute('src');
videourl.replaceChild(videosrc);
});