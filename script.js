var batwing = {
	status: "ready",
	rescuebatman: function() {
		document.write("hi this is the text");
		
	}
}

if (batwing.status == "ready") {
	batwing.rescuebatman();
}

var utilities = {
	printfAll: function(target) {
		for (i in target) {
			document.write("<br>" + target[i]);
		}
	}
}

var leo = {
	name : leo,
	age : 30,
	address : function() {
		document.write("plz");
	}
		
	}
	
	cities : [
	{name: "leo", age:30},
	{name: "peter", age:32}]

	
	if (typeof leo.sex == "undefined") {
		leo.sex = male;
	}
	
	function car(make,model,year) {
		this.make = make;
		this.model = model;
		<!-- use this to make it equal -->
	}
	
	var mycar = new car("porshe", "911");
	alert ('mycar');