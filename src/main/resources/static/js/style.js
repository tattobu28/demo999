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


function nameCheck() {
    var str = document.getElementById("name_form").value;
    const name_err1 = document.getElementById("name_err1");
    const name_err2 = document.getElementById("name_err2");

    if (str.trim().length == 0) {
        name_err1.style.display = "block";
        name_err2.style.display = "none";
    } else if (str.match(/^[^\x01-\x7E\uFF61-\uFF9F]+$/)) {
        name_err1.style.display = "none";
        name_err2.style.display = "none";
    } else {
        //全角文字以外
        name_err1.style.display = "none";
        name_err2.style.display = "block";
    }
}

function kanaCheck() {
    var str = document.getElementById("kana_form").value;
    const kana_err1 = document.getElementById("kana_err1");
    const kana_err2 = document.getElementById("kana_err2");

    if (str.trim().length == 0) {
        kana_err1.style.display = "block";
        kana_err2.style.display = "none";
    } else if (str.match(/^[ァ-ヶー ]*$/)) {
        kana_err1.style.display = "none";
        kana_err2.style.display = "none";
    } else {
        kana_err1.style.display = "none";
        kana_err2.style.display = "block";
    }
}

function pnCheck() {
    var str = document.getElementById("pn_form").value;
    const pn_err1 = document.getElementById("pn_err1");
    const pn_err2 = document.getElementById("pn_err2");
    const pn_err3 = document.getElementById("pn_err3");


    if (str.trim().length == 0) {
        pn_err1.style.display = "block";
        pn_err2.style.display = "none";
        pn_err3.style.display = "none";
    } else if (str.match(/^[0-9]+$/)) {
        if (str.length < 10) {
            pn_err1.style.display = "none";
            pn_err2.style.display = "none";
            pn_err3.style.display = "block";
        } else {
            pn_err1.style.display = "none";
            pn_err2.style.display = "none";
            pn_err3.style.display = "none";
        }
    } else {
        pn_err1.style.display = "none";
        pn_err2.style.display = "block";
        pn_err3.style.display = "none";
    }
}

function pcCheck() {
    var str = document.getElementById("pc_form").value;
    const pc_err1 = document.getElementById("pc_err1");
    const pc_err2 = document.getElementById("pc_err2");
    const pc_err3 = document.getElementById("pc_err3");


    if (str.trim().length == 0) {
        pc_err1.style.display = "block";
        pc_err2.style.display = "none";
        pc_err3.style.display = "none";
    } else if (str.match(/^[0-9]+$/)) {
        if (str.length < 7) {
            pc_err1.style.display = "none";
            pc_err2.style.display = "none";
            pc_err3.style.display = "block";
        } else {
            pc_err1.style.display = "none";
            pc_err2.style.display = "none";
            pc_err3.style.display = "none";
        }
    } else {
        pc_err1.style.display = "none";
        pc_err2.style.display = "block";
        pc_err3.style.display = "none";
    }
}