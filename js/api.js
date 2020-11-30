$(document).ready(function () {

  showCurrentCookies();

  let userId = 0
  actualID = getCookie("id")
  if (actualID != "undefined") {
    userId = actualID
  }
  $("#button").click(function () {
    userId++;
    $.ajax({ 
        url: 'https://jsonplaceholder.typicode.com/users/'+userId,
        dataType: 'jsonp', 
        type: 'GET',
        crossDomain: true,
        success: onsuccess 
    });
  });
});

function onsuccess(data, status, jqxhr) {
  var cookies = document.cookie;

  setCookie('email',data["email"])
  setCookie("id",data["id"])
  setCookie("name",data["name"])
  setCookie("phone",data["phone"])
  setCookie("username",data["username"])
  setCookie("website",data["website"])

  showCurrentCookies();
}

function showCurrentCookies(){
  $("#email")[0].innerHTML = "<b>"+getCookie("email") + "</b>"
  $("#name")[0].innerHTML = "<b>"+getCookie("name") + "</b>"
  $("#phone")[0].innerHTML = "<b>"+getCookie("phone") + "</b>"
  $("#username")[0].innerHTML = "<b>"+getCookie("username") + "</b>"
  $("#website")[0].innerHTML = "<b>"+getCookie("website") + "</b>"
}


function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
