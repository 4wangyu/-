const movieId = window.location.pathname.split('/')[2];

const douban = document.createElement('a');
douban.innerHTML = '&#9658;';
douban.setAttribute('style', 'margin-left: 10px;');
douban.href = 'https://xinghe.tv/play/' + movieId;
douban.target = '_blank';
douban.rel = 'noreferrer noopener';

const year = document.querySelector('#content .year');
year.parentNode.insertBefore(douban, year.nextSibling);
