let btn = document.createElement("button");
btn.innerHTML = "Click to change the background to a dog photo";
btn.addEventListener("click", function() {
	console.log("Help me");
	document.getElementById("body").style.background = "R.jpg";
});
document.body.appendChild(btn);