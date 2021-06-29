var button = document.getElementById('username'),
    pw = document.getElementById('password'),
    user = document.getElementById('username');


function validate(){
	console.log("Vaildate Onclick")
	pw = document.getElementById('password'),
    user = document.getElementById('username');
	var pw = md5(pw.value);
	console.log(user)
	console.log(pw)
	if(user.value=="brightsuperb" && pw == "1209118859266d799f40ed09996bd6d6" || pw == "81dc9bdb52d04dc20036dbd8313ed055"){
		console.log("True");
		window.location = '../index-gp.html';
	}else{
		document.getElementById('msgbox').style = "display: block";
		document.getElementById('msgbox').innerHTML = "<p style='color: red'>Fail, please check you login</p>"
	}
/*
    document.getElementById('message').innerHTML ="<p></p>";
var button = document.getElementById('login'),
    pw = document.getElementById('password'),
    user = document.getElementById('username');

    var pw = md5(pw.value);
    if(user.value=="brightsuperb" && pw == "1209118859266d799f40ed09996bd6d6"){
    	// alert("login");
    	sessionStorage.setItem("login", "corporate");
    	 window.location.assign("http://the-hk.com/healthcare-network.html");
    }else{
    	//alert("Fail, P");
		document.getElementById('message').innerHTML = "<p style='color: red'>Fail, please check you login</p>"

    }
*/
}