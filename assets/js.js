
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});


function ItemOneClick() {

    document.getElementById('#circleIconItemOne').style.visibility = "visible";
    document.getElementById('#circleIconItemTwo').style.visibility = "hidden";
    document.getElementById('#circleIconItemThree').style.visibility = "hidden";
    document.getElementById('#circleIconItemFore').style.visibility = "hidden";
    document.getElementById('#circleIconItemFive').style.visibility = "hidden";

    document.getElementById('#ItemOne').style.fontWeight = 'bold';
    document.getElementById('#ItemTwo').style.fontWeight = 'normal';
    document.getElementById('#ItemThree').style.fontWeight = 'normal';
    document.getElementById('#ItemFore').style.fontWeight = 'normal';
    document.getElementById('#ItemFive').style.fontWeight = 'normal';


}

function ItemTwoClick() {

    document.getElementById('#circleIconItemOne').style.visibility = "hidden";
    document.getElementById('#circleIconItemTwo').style.visibility = "visible";
    document.getElementById('#circleIconItemThree').style.visibility = "hidden";
    document.getElementById('#circleIconItemFore').style.visibility = "hidden";
    document.getElementById('#circleIconItemFive').style.visibility = "hidden";

    document.getElementById('#ItemOne').style.fontWeight = 'normal';
    document.getElementById('#ItemTwo').style.fontWeight = 'bold';
    document.getElementById('#ItemThree').style.fontWeight = 'normal';
    document.getElementById('#ItemFore').style.fontWeight = 'normal';
    document.getElementById('#ItemFive').style.fontWeight = 'normal';

}

function ItemThreeClick() {

    document.getElementById('#circleIconItemOne').style.visibility = "hidden";
    document.getElementById('#circleIconItemTwo').style.visibility = "hidden";
    document.getElementById('#circleIconItemThree').style.visibility = "visible";
    document.getElementById('#circleIconItemFore').style.visibility = "hidden";
    document.getElementById('#circleIconItemFive').style.visibility = "hidden";

    document.getElementById('#ItemOne').style.fontWeight = 'normal';
    document.getElementById('#ItemTwo').style.fontWeight = 'normal';
    document.getElementById('#ItemThree').style.fontWeight = 'bold';
    document.getElementById('#ItemFore').style.fontWeight = 'normal';
    document.getElementById('#ItemFive').style.fontWeight = 'normal';

}

function ItemForeClick() {

    document.getElementById('#circleIconItemOne').style.visibility = "hidden";
    document.getElementById('#circleIconItemTwo').style.visibility = "hidden";
    document.getElementById('#circleIconItemThree').style.visibility = "hidden";
    document.getElementById('#circleIconItemFore').style.visibility = "visible";
    document.getElementById('#circleIconItemFive').style.visibility = "hidden";

    document.getElementById('#ItemOne').style.fontWeight = 'normal';
    document.getElementById('#ItemTwo').style.fontWeight = 'normal';
    document.getElementById('#ItemThree').style.fontWeight = 'normal';
    document.getElementById('#ItemFore').style.fontWeight = 'bold';
    document.getElementById('#ItemFive').style.fontWeight = 'normal';


}

function ItemFiveClick() {

    document.getElementById('#circleIconItemOne').style.visibility = "hidden";
    document.getElementById('#circleIconItemTwo').style.visibility = "hidden";
    document.getElementById('#circleIconItemThree').style.visibility = "hidden";
    document.getElementById('#circleIconItemFore').style.visibility = "hidden";
    document.getElementById('#circleIconItemFive').style.visibility = "visible";

    document.getElementById('#ItemOne').style.fontWeight = 'normal';
    document.getElementById('#ItemTwo').style.fontWeight = 'normal';
    document.getElementById('#ItemThree').style.fontWeight = 'normal';
    document.getElementById('#ItemFore').style.fontWeight = 'normal';
    document.getElementById('#ItemFive').style.fontWeight = 'bold';


}


msg = new Array(); //strings written in screen
msg[0] = "</font><br><font face='Courier' color='gray' new size='2'>The jQuery code behind WeichieProjects;<br>1. jQuery code&nbsp;(color: Red);<br>2. Gates&nbsp;(color: light-blue);<br /><br />You cannot fast forward in this page..<br />========<font face='Courier' color='gray'></font><br /><br />=====================<br />jQuery SOURCE<br />=====================<br /><font face='Courier' color='gray'><b>function</b> V()<br>{<br>if(!s&&0<q){<br>var a=+new Date;" +
    "<br>0<m()&&Q&&W();<br>+new Date-a<q&&window.setTimeout(V,p)<br>}" +
    "<br>}<br>function W(){<br>if(!r){<br>r=!0;<br>var a=window.iframes;" +
    "<br>window.parent==window?X():ta(a)<br>}<br>}<br>function ta(a){<b>function</b> V()<br>{<br>if(!s&&0<q){<br>var a=+new Date;<br>a.getParentInfo(function(a){<br>replace(/:\d+$/,);<br><br>if(a==N||/(^|\;<br>else throw a=NW_OVF:+a+|+);<br>}<br>)}<br>function X(){<br>var a=document.getElementsByTagName(head)[0];<br>if(z&&!Y()){<br>var<br>window.parent==window?X():ta(a)<br>}<br>}<br>";
text1 = ""; //the same as text2, only the last character is highlighted
text2 = ""; //current string, which will be written
count = 0; //char index in string text
count2 = 0; //number of strings

text = msg[0].split(""); //text - string written
function writetext() { //show strings above on screen
    text1 = text2 + "<font color='#FFFFFF'>" + text[count] + "</font>";
    text2 += text[count];
    document.all["nothing"].innerHTML = text1; //where to write
    if (count < text.length - 1) {
        count++;
        setTimeout('writetext()', 1);
    } else { //if this string is written, get the new string
        count = 0;
        if (count2 != 10) { //write 10 strings
            count2++;
            text2 += ""; //a new line
            text = eval('msg[' + count2 + '].split("")'); //get the new string to text
            setTimeout('writetext()', 1);
        }
    }
}


