function addPlayButton() {
  const movieName = window.document.title.slice(0, -5);

  const douban = document.createElement('a');
  douban.innerHTML = '&#9658;';
  douban.setAttribute('style', 'margin-left: 10px;');
  douban.href = 'https://www.iyf.tv/search/' + movieName;
  douban.target = '_blank';
  douban.rel = 'noreferrer noopener';

  const year = document.querySelector('#content .year');
  year.parentNode.insertBefore(douban, year.nextSibling);
}

function addImdbLink() {
  const xpath = "//span[text()='IMDb:']";
  const matchingElement = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  if (matchingElement) {
    const imdbId = matchingElement.nextSibling.textContent.trim();
    matchingElement.nextSibling.remove();
    const imdbLink = document.createElement('a');
    imdbLink.innerText = imdbId;
    imdbLink.setAttribute('style', 'margin-left: 4px;');
    imdbLink.href = 'https://www.imdb.com/title/' + imdbId;
    imdbLink.target = '_blank';
    imdbLink.rel = 'noreferrer noopener';
    matchingElement.parentNode.insertBefore(
      imdbLink,
      matchingElement.nextSibling
    );
  }
}

addPlayButton();
addImdbLink();
