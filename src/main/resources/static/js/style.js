var pics_src = new Array("images/square-1.jpg", "images/check_mark-1.jpg");
var images_src = new Array("images/chkBox_off.jpg", "images/chkBox_on.jpg");
var i = 0;
var chkBox = document.getElementsByClassName("chkBoxImage");

function allChange() {
    if (i == 1) {
        i = 0;
    }
    else {
        i++;
    }
    document.getElementById("allChkBox").src = pics_src[i];
    if (i == 1) {
        u = 1
    }
    else {
        u = 0
    }
    for (var n = 1; n <= chkBox.length; n++) {
        document.getElementById("chkBox" + n).src = images_src[u];
    }
}

var images_src = new Array("images/chkBox_off.jpg", "images/chkBox_on.jpg");
var i = 0;

function change1() {

    if (i == 1) {
        i = 0;
    }
    else {
        i++;
    }
    document.getElementById("chkBox1").src = images_src[i];
}

function change2() {
    if (i == 1) {
        i = 0;
    }
    else {
        i++;
    }
    document.getElementById("chkBox2").src = images_src[i];
}

function change3() {
    if (i == 1) {
        i = 0;
    }
    else {
        i++;
    }
    document.getElementById("chkBox3").src = images_src[i];
}

/*document.addEventListener('click', e=>{
  const pics_src = ["images/square-1.jpg","images/check_mark-1.jpg"];
  const images_src = ["images/chkBox_off.jpg","images/chkBox_on.jpg"];
  const t=e.target;
  const changeImage=(t,n)=>Object.assign(t,{src:images_src[n],alt:['off','on'][n]});
  if(t.closest('.chkBoxImage')){
    const n=images_src.indexOf(t.getAttribute('src'))^1;
    changeImage(t,n);
  }
  if(t.closest('#allChkBox')){
    const n=pics_src.indexOf(t.getAttribute('src'))^1;
    Object.assign(t,{src:pics_src[n],alt:['off','on'][n]});
    document.querySelectorAll('.chkBoxImage').forEach(x=>changeImage(x,n))
  }
});*/

document.getElementById("table1").style.display = "none";

function clickSearchBtn() {
    const table1 = document.getElementById("table1");

    if (table1.style.display == "block") {
        table1.style.display = "none";
    } else {
        table1.style.display = "block";
    }
}