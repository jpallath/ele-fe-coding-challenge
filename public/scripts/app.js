
// mobile variables
var open = document.querySelector(".menu-open")
var menu = document.querySelector(".menu-container");
var close = document.querySelector(".menu-close");
var page = document.querySelector(".page-content");
var overlay = document.querySelector(".overlay");
var elephant = document.querySelector(".home-icon-mini");
var submenuA =document.querySelector(".carrot-event-a")
var submenuB =document.querySelector(".carrot-event-b")
var submenuC =document.querySelector(".carrot-event-c")
var submenuD =document.querySelector(".carrot-event-d")

//desktop variables
var about = document.querySelector(".carrot-event-a");
var careers = document.querySelector(".carrot-event-b");
var ideas = document.querySelector(".carrot-event-c");
var contact = document.querySelector(".carrot-event-d");
var btn1 = document.querySelector(".work");
var btn2 = document.querySelector(".news");
var btn3 = document.querySelector(".events");
//about events
var about1 = document.querySelector(".about-1");
var about2 = document.querySelector(".about-2");
var about3 = document.querySelector(".about-3");
//career events
var career1 = document.querySelector(".careers-1");
var career2 = document.querySelector(".careers-2");
var career3 = document.querySelector(".careers-3");
var career4 = document.querySelector(".careers-4");
var career5 = document.querySelector(".careers-5");
var career6 = document.querySelector(".careers-6");
var career7 = document.querySelector(".careers-7");
var career8 = document.querySelector(".careers-8");
//idea events
var idea1 = document.querySelector(".ideas-1");
var idea2 = document.querySelector(".ideas-2");
var idea3 = document.querySelector(".ideas-3");
var idea4 = document.querySelector(".ideas-4");
//contact event
var contact1 = document.querySelector(".contacts-1");
var contact2 = document.querySelector(".contacts-2");
var contact3 = document.querySelector(".contacts-3");
var contact4 = document.querySelector(".contacts-4");
var contact5 = document.querySelector(".contacts-5");
var contact6 = document.querySelector(".contacts-6");
var contact7 = document.querySelector(".contacts-7");
var contact8 = document.querySelector(".contacts-8");

open.addEventListener("click", function(){
  menu.classList.add("active")
  close.classList.add("active")
  open.classList.remove("active")
  overlay.classList.add("active")
  page.classList.add("deactive")
  elephant.classList.add("active")
});


close.addEventListener("click", function(){
  close.classList.remove("active")
  menu.classList.remove("active")
  open.classList.add("active")
  overlay.classList.remove("active")
  page.classList.remove("deactive")
  elephant.classList.remove("active")
});

submenuA.addEventListener("click", function(){
  submenuA.classList.add("active")
  submenuB.classList.remove("active")
  submenuC.classList.remove("active")
  submenuD.classList.remove("active")
});

submenuB.addEventListener("click", function(){
  submenuB.classList.add("active")
  submenuA.classList.remove("active")
  submenuC.classList.remove("active")
  submenuD.classList.remove("active")
});

submenuC.addEventListener("click", function(){
  submenuC.classList.add("active")
  submenuB.classList.remove("active")
  submenuA.classList.remove("active")
  submenuD.classList.remove("active")
});

submenuD.addEventListener("click", function(){
  submenuD.classList.add("active")
  submenuB.classList.remove("active")
  submenuC.classList.remove("active")
  submenuA.classList.remove("active")
});

about.addEventListener("click", function(){
  about.classList.add("active")
  careers.classList.remove("active")
  ideas.classList.remove("active")
  contact.classList.remove("active")
  overlay.classList.add("active")
});

careers.addEventListener("click", function(){
  careers.classList.add("active")
  about.classList.remove("active")
  ideas.classList.remove("active")
  contact.classList.remove("active")
  overlay.classList.add("active")
});

ideas.addEventListener("click", function(){
  ideas.classList.add("active")
  careers.classList.remove("active")
  about.classList.remove("active")
  contact.classList.remove("active")
  overlay.classList.add("active")
});

contact.addEventListener("click", function(){
  contact.classList.add("active")
  careers.classList.remove("active")
  ideas.classList.remove("active")
  about.classList.remove("active")
  overlay.classList.add("active")
});

overlay.addEventListener("click", function(){
  overlay.classList.remove("active")
  about.classList.remove("active")
  careers.classList.remove("active")
  ideas.classList.remove("active")
  contact.classList.remove("active")
  close.classList.remove("active")
  menu.classList.remove("active")
  open.classList.add("active")
  overlay.classList.remove("active")
  page.classList.remove("deactive")
  elephant.classList.remove("active")
})

btn1.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[0].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

btn2.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[4].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

btn3.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[5].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

about1.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[1].items[0].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

about2.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[1].items[1].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

about3.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[1].items[2].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})


career1.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[2].items[0].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

career2.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[2].items[1].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

career3.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[2].items[2].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

career4.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[2].items[3].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

career5.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[2].items[4].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

career6.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[2].items[5].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})


career7.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[2].items[6].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

career8.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[2].items[7].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

idea1.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[3].items[0].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

idea2.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[3].items[1].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

idea3.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[3].items[2].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

idea4.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[3].items[3].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

contact1.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[6].items[0].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

contact2.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[6].items[1].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

contact3.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[6].items[2].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

contact4.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[6].items[3].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

contact5.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[6].items[4].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

contact6.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[6].items[5].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})


contact7.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[6].items[6].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})

contact8.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).items[6].items[7].url;
      window.location.replace(url);
    }
  }
  XHR.open("GET","/api/navigation");
  XHR.send();
})
