function getFormvalue() {
    //Write your code here
let first =document.querySelector('#form1 input[name="fname"]');
let last =document.querySelector('#form1 input[name="lname"]');
	let fname=first.value;
	let lname=last.value;
	alert(fname+" "+lname);
}