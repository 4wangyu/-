const movieId = window.location.pathname.split("/")[2];

const douban = document.createElement("a");
douban.innerHTML = "🔗";
douban.setAttribute("style", "margin-left: 10px;");
douban.href = "https://movie.douban.com/subject/" + movieId;
douban.target = "_blank";
douban.rel = "noreferrer noopener";

const insert = () => setTimeout(() => {
  const h1 = document.querySelector("h1");
  if(h1) {
    h1.parentNode.insertBefore(douban, h1.nextSibling.nextSibling);
  } else {
    insert();
  }
});

insert();