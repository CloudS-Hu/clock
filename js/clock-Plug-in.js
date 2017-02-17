window.onload = function() {
	//创建电子时钟div
	var electronicClock = document.createElement("div");
	var eC = electronicClock.style;
	document.body.appendChild(electronicClock);
	eC.height = "50px";
	eC.width = "200px";
	eC.position = "absolute";
	eC.left = "150px";
	eC.top = "300px";
	eC.borderRadius = "15px";
	eC.border = "1px solid rgb(90,90,90)";
	eC.color = "rgb(162,162,162)";
	eC.fontSize = "40px";
	eC.fontFamily = "book antiqua";
	eC.letterSpacing = "5px";
	eC.lineHeight = "50px";
	eC.backgroundColor = "black";
	eC.textAlign = "center";
	//创建时钟包裹层
	var wrapper = document.createElement("div");
	var w = wrapper.style;
	document.body.appendChild(wrapper);
	w.height = "602px";
	w.width = "602px";
	w.margin = "auto";
	//创建时钟外框div
	var outside = document.createElement("div");
	var o = outside.style;
	wrapper.appendChild(outside);
	o.height = "600px";
	o.width = "600px";
	o.border = "1px solid gray";
	o.borderRadius = "600px";
	o.textAlign = "center";
	o.display = "table-cell";
	o.verticalAlign = "middle";
	o.position = "relative";
	o.background = "linear-gradient(to top right,gray 10%,white 20%,gray 70%,gray,white 90%)";
	o.boxShadow = "5px 15px 40px 1px rgba(102,102,102,0.5)";
	//创建时钟旋转中心点div
	var centre = document.createElement("div");
	var c = centre.style;
	outside.appendChild(centre);
	c.height = "16px";
	c.width = "16px";
	c.borderRadius = "16px";
	c.position = "absolute";
	c.background = "red";
	c.left = "292px";
	c.top = "292px";
	c.zIndex = "2";
	c.background = "radial-gradient(white 20%,rgb(202,202,202) 60%,white 80%)";
	//创建时钟外框内边缘div
	var outsideEdge = document.createElement("div");
	var oE = outsideEdge.style;
	outside.appendChild(outsideEdge);
	oE.height = "560px";
	oE.width = "560px";
	oE.display = "inline-block";
	oE.textAlign = "center";
	oE.verticalAlign = "middle";
	oE.position = "relative";
	oE.borderRadius = "560px";
	oE.background = "linear-gradient(to top right,white 15%,gray 20%,white 50%,white 60%,gray 100%,white 110%)";
	//创建时钟底层背景div
	var groundFloor = document.createElement("div");
	var gF = groundFloor.style;
	outsideEdge.appendChild(groundFloor);
	gF.height = "550px";
	gF.width = "550px";
	gF.position = "absolute";
	gF.left = "4px";
	gF.top = "4px";
	gF.border = "1px solid rgb(202,202,202)";
	gF.borderRadius = "550px";
	gF.background = "linear-gradient(to top left,rgb(264,264,264),rgb(165,165,165) 80%)";
	//创建刻度div
	for (var n = 0; n < 60; n++) {
		var groundScale = document.createElement("div");
		var gS = groundScale.style;
		groundFloor.appendChild(groundScale);
		gS.position = "absolute";
		gS.background = "black";
		gS.top = "6px";
		gS.transform = "rotate(" + n * 6 + "deg)";
		if (n % 5 == 0) {
			gS.height = "68px";
			gS.width = "14px";
			gS.left = "268px";
			gS.transformOrigin = "7px 269px";
		} else {
			gS.height = "34px";
			gS.width = "6px";
			gS.left = "272px";
			gS.transformOrigin = "3px 269px";
		}
	}
	//创建秒针
	var secondHand = document.createElement("div");
	var sH = secondHand.style;
	groundFloor.appendChild(secondHand);
	sH.height = "276px";
	sH.width = "4px";
	sH.position = "absolute";
	sH.left = "273px";
	sH.top = "59px";
	sH.background = "black";
	sH.transformOrigin = "2px 216px";
	sH.boxShadow = "-7px 8px 3px 0px rgba(102,102,102,0.6)";
	//创建分针
	var minuteHand = document.createElement("div");
	var mH = minuteHand.style;
	groundFloor.appendChild(minuteHand);
	mH.height = "238px";
	mH.width = "8px";
	mH.position = "absolute";
	mH.left = "271px";
	mH.top = "87px";
	mH.background = "black";
	mH.transformOrigin = "4px 188px";
	mH.boxShadow = "-5px 5px 3px 0px rgba(102,102,102,0.7)";
	//创建时针
	var hourHand = document.createElement("div");
	var hH = hourHand.style;
	groundFloor.appendChild(hourHand);
	hH.height = "190px";
	hH.width = "14px";
	hH.position = "absolute";
	hH.left = "268px";
	hH.top = "125px";
	hH.background = "black";
	hH.transformOrigin = "7px 150px";
	hH.boxShadow = "-3px 4px 3px 0px rgba(102,102,102,0.7)";
	//创建背景遮罩div
	var groundShade = document.createElement("div");
	var gSe = groundShade.style;
	groundFloor.appendChild(groundShade);
	gSe.height = "498px";
	gSe.width = "498px";
	gSe.position = "absolute";
	gSe.left = "26px";
	gSe.top = "26px";
	gSe.borderRadius = "498px";
	gSe.background = "linear-gradient(to top left,rgba(255,255,255,0.1) 20%,rgba(255,255,255,0.2) 50%,rgba(255,255,255,0.5) 60%)";
	//创建当前时间赋给时分秒针
	function formJudge(t) {
		return t < 10 ? "0" + t : t;
	}
	setInterval(function() {
		var nowTime = new Date();
		var Senonds = nowTime.getSeconds();
		var Minutes = nowTime.getMinutes();
		var Hours = nowTime.getHours();
		electronicClock.innerHTML = "" + formJudge(Hours) + ":" + formJudge(Minutes) + ":" + formJudge(Senonds) + "";
		sH.transform = "rotate(" + Senonds * 6 + "deg)";
		mH.transform = "rotate(" + (Minutes * 6 + Senonds * 0.1) + "deg)";
		hH.transform = "rotate(" + (Hours * 30 + Minutes * 0.5) + "deg)";
	}, 1000);
}