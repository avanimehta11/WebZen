switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateSTYLE();
    document.body.innerHTML = generateHTML("YouTube");
    addAnimations();
    break;
  case "www.instagram.com":
    document.head.innerHTML = generateSTYLE();
    document.body.innerHTML = generateHTML("Instagram");
    addAnimations();
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLE();
    document.body.innerHTML = generateHTML("Netflix");
    addAnimations();
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLE();
    document.body.innerHTML = generateHTML("Facebook");
    addAnimations();
    break;
  case "www.discord.com":
    document.head.innerHTML = generateSTYLE();
    document.body.innerHTML = generateHTML("Discord");
    addAnimations();
    break;
  case "www.hotstar.com":
    document.head.innerHTML = generateSTYLE();
    document.body.innerHTML = generateHTML("Hotstar");
    addAnimations();
    break;
  case "www.primevideo.com":
    document.head.innerHTML = generateSTYLE();
    document.body.innerHTML = generateHTML("Amazon Prime");
    addAnimations();
    break;
  case "www.twitter.com":
    document.head.innerHTML = generateSTYLE();
    document.body.innerHTML = generateHTML("X");
    addAnimations();
    break;
}

function addAnimations() {
  var str = document.getElementsByTagName("div")[0].innerHTML.toString();
  var i = 0;
  document.getElementsByTagName("div")[0].innerHTML = "";

  setTimeout(function () {
    var se = setInterval(function () {
      i++;
      document.getElementsByTagName("div")[0].innerHTML = str.slice(0, i) + "|";
      if (i == str.length) {
        clearInterval(se);
        document.getElementsByTagName("div")[0].innerHTML = str;
      }
    }, 10);
  }, 0);
}
