window.addEventListener("load",addListener);
function addListener() 
{
	alert("ligma")
	document.getElementById("btnsubmit").addEventListener("click",checkinfo);
}
function checkinfo()
{
	var whichnum, msg= "please enter proper information";
	
	whichnum= document.getElementById("txtmonth").value;
	
	if(whichnum == "" || (whichnum<0 ||whichnum>12))
	{
		alert(msg);
		document.getElementById("txtmonth").value= "";
		document.getElementById("txtmonth").focus
	}
	else
	{
		whichmonth(whichnum)
	}
}
function whichmonth(whichvalue)
{
	switch(whichvalue)
	{
		case "1": 
			msgdisp= "january"
			break;
		case "2":
			msgdisp= "febuary";
			break;
		default:
			msgdisp= "somthing went wrong... no month";
			break;
	}
	document.getElementById("lbldisplay").textContent = msgdisp;
}
