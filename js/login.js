$("button#submitBTN").click(function(e) {
e.preventDefault();
    var emailID = $("#emailBox").val();
    var password = $("#passwordBox").val();
	$.ajax({
    type: "POST",
    url: "php/checkLogin.php",
    data: {
        email: emailID,
        pass: password
    },
    success: function (data) {
        if(data == "true") { $("#mainContainer").load("led.html"); }
        else if(data == "false") { $("#errorNotice").html("Username or Password incorrect"); }
        else{ $("#mainContainer").html("Stop playing around Bitch!"); }
        
    }
	});
});