import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(data => {
    localStorage.setItem(KEY, JSON.stringify(data));
  }, 1000)
);

const savedTimePauseStr = localStorage.getItem(KEY);
const savedTimePauseOb = JSON.parse(savedTimePauseStr);

player
  .setCurrentTime(savedTimePauseOb.seconds)
  .then(function (savedTimePauseOb) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });