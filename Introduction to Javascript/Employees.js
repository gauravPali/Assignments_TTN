var arr=[];
function save() {
	var n=document.getElementById("f").value;
	var a=document.getElementById("s").value;
	var s=document.getElementById("t").value;
//	var d=document.getElementById("fo").value;
	// alert(n+a+s+d);
   //create_object(n,a,s,d);
   var o={};
	o.name=n;
	o.age=a;
	o.salary=s;
	arr.push(o);		
}	
function filtr() {
	console.log("Employees having Salary more than 5000");
	var f=0;
	for(i=0;i<arr.length;i++){
		 	if(arr[i].salary>5000){
		 		f=1;
		 		console.log("Name: "+ arr[i].name);
		 		console.log("Salary: 	" + arr[i].salary);
		 	}
	}
	if(!f){
		console.log("No Such Employees Found!");
	}
}
function fetch(){
	console.log("Employees having Age more than 20 and salary less than 1000");
	var f=0;
	for(i=0; i<arr.length;i++){
		if(arr[i].age > 20 && arr[i].salary <1000){
			f=1;
			console.log("Name: "+ arr[i].name);
			console.log("Salary: " + arr[i].salary);
			console.log("Incrementing Salary 5 times");
			arr[i].salary *=5;
			alert("Salary: "+arr[i].salary);
		}
	}
	if(!f){
		console.log("No Such Employees Found!");
	}
}

function group() {
	var a1=[],a2=[];
	for(i=0;i<arr.length;i++){
		if(arr[i].age<=18)
			a1.push(arr[i]);
		else
			a2.push(arr[i]);
	}
	console.log("Group1 "+a1);
	console.log("Group2"+a2);
}
/*function validate(){
		var val=document.getElementById("f").value;
		var ptt= /[a-zA-Z]+/;
		alert(val);
}*/