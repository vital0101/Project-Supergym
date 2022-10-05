const videoBtn = document.querySelector('.gym__video-btn');
const videoFrame = document.querySelector('.gym__video-player iframe');
const videoCover = document.querySelector('.gym__video-cover');


const playVideo = () => {
  videoBtn.addEventListener('click', function () {
    videoFrame.style.display = 'block';
    videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    videoCover.style.display = 'none';
    videoBtn.style.display = 'none';
  });
};

export {playVideo};
