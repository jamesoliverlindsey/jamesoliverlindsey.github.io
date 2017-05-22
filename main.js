/**
 * Created by James on 5/20/2017.
 */

window.onscroll = function(){scrollCallBack()};

function scrollCallBack() {
    var div = document.getElementById("navbar");
    var body = document.getElementsByTagName("body")[0];

    var delta = body.getBoundingClientRect()["top"];
    var div_offset = parseInt(getComputedStyle(div).getPropertyValue("top"));

    console.log("if      :" + (div.classList.contains("absolute") && -delta > div_offset));
    console.log("else if :" + (div.classList.contains("fixed") && -delta < 100));
    if (div.classList.contains("absolute") && -delta > div_offset) {
        div.classList.add('fixed');
        div.classList.remove('absolute');
    } else if (div.classList.contains("fixed") && -delta < 100) {
        div.classList.remove('fixed');
        div.classList.add('absolute');
    }
}

