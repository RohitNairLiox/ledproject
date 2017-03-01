$("button#btnON").click(function(e) {
e.preventDefault();
if($("#myImage").attr("src") == "img/bulbon.gif"){$("#resultSec").html("LED is already ON!");return;}
var on = "1";
	$.ajax({
    type: "GET",
    url: "php/led.php",
    data: {
        action: on
    },
    success: function (data) {
	$("#myImage").attr("src","img/bulbon.gif");
	$("#resultSec").html("LED " + data + "!");
    }
	});
});
$("button#btnOFF").click(function(e) {
e.preventDefault();
if($("#myImage").attr("src") == "img/bulboff.gif"){$("#resultSec").html("LED is already OFF!");return;}
var off = "2";
	$.ajax({
    type: "GET",
    url: "php/led.php",
    data: {
        action: off
    },
    success: function (data) {
	$("#myImage").attr("src","img/bulboff.gif");
    	$("#resultSec").html("LED " + data + "!");
    }
	});
});