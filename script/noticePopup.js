	var engTitle = document.getElementById('engTitle'),
    engText = document.getElementById('engText'),
    chiTitle = document.getElementById('chiTitle'),
	chiText = document.getElementById('chiText');
	
$(window).ready(function(){popupMessage()})
	
function popupMessage(){
	console.log("START")
	engTitle.innerHTML = "Notice:"
	engText.innerHTML = "Our website is undergoing modification to give our clients a fresh new perspective and this will be completed soon. We apologize for any inconvenience caused and please do not hesitate to contact us at 3723 3050 or to e-mail us at info@the-hk.com at any time."
	chiTitle.innerHTML = "通告:"
	chiText.innerHTML = "我們的網站現正進行更新工程，全新的網頁快將面世。其間，對於為您帶來的任何不便，我們深表歉意。如需任何協助，請隨時致電 3723－3050 或發送電子郵件至 info@the-hk.com 與我們聯繫。"
}