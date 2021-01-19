const movieId = window.location.pathname.split('/')[2];

const play = document.createElement('a');
play.innerHTML = '&#9658;';
play.setAttribute('style', 'margin-left: 10px;');
play.href = 'https://hugelive.com/play/' + movieId;
play.target = '_blank';
play.rel = 'noreferrer noopener';

const year = document.querySelector('#content .year');
year.parentNode.insertBefore(play, year.nextSibling);
