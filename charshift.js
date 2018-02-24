var v1=document.getElementById('field1');
var v2=document.getElementById('field2');
var moveit1,moveit2;

function ltr() {
clearInterval(moveit2);
clearInterval(moveit1);
moveit1=setInterval(moveltr,1000);	
}

function moveltr(){
	va
	v1.value=v1.value.slice(1,v1.value.length);

	var res=v1.value.slice(0,1);
	v2.value=v2.value+res;
}


function rtl(){
	clearInterval(moveit1);
	
clearInterval(moveit2);

moveit2=setInterval(movertl,1000);		
}

function movertl(){

}


function pause(){
clearInterval(moveit1);
clearInterval(moveit2);
}
