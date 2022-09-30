const videoBtn = document.querySelector('.gym__video-btn');
const videoFrame = document.querySelector('.gym__video-player iframe');
const videoCover = document.querySelector('.gym__video__cover');


const playVideo = () => {
  videoBtn.addEventListener('click', function () {
    videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    videoCover.style.display = 'none';
    videoBtn.style.display = 'none';
  });
};

export {playVideo};
