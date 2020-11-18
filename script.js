const video = document.querySelector('.video');
const speedController = document.querySelector('.speed-controller');
const speedBar = speedController.querySelector('.speed-controller__bar');
const barValue = speedBar.querySelector('.bar__value');

speedController.addEventListener('mousemove',handlerSpeedVideo);

function handlerSpeedVideo(e) {
    const barY = e.pageY - this.offsetTop;
    const percent = barY / this.offsetHeight;
    const height = `${Math.round(percent * 100)}%`;
    const min = 0.4;
    const max = 4;
    const playbackRate = (percent * (max - min) + min).toFixed(2);
    
    speedBar.style.height = height;
    video.playbackRate = playbackRate;
    barValue.textContent = `${playbackRate}x`;
}

