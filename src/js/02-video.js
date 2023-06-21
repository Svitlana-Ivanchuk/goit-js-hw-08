import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const setCurrentTime = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(setCurrentTime, 1000));

const getCurrentTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(getCurrentTime)
  .then(function (seconds) {
    // seconds = the current playback position
  })
  .catch(function (error) {
    // an error occurred
  });
