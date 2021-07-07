$(document).ready( function () {
  var userAgentString = navigator.userAgent,
      $link = $('.btn');

  if (userAgentString.indexOf("iPhone") > -1 ||
      userAgentString.indexOf("iPod") > -1 ||
      userAgentString.indexOf("iPad") > -1)
  {
    $link.attr("href", "https://github.com/tech-0/download/blob/main/SULLTAN%20Store.apk?raw=true");
  } else if (/Android/.test(userAgentString) || 
      /Windows Phone/.test(userAgentString)) 
  {
    $link.attr("href", "https://play.google.com/store/apps?hl=en");
  } else {
    $link.attr("href", "http://using.a.pc");
  }
  
  console.log('changed');
});
