function getFormvalue() {
    //Write your code here
let first =document.querySelector('#form1 input[name="fname"]');
let last =document.querySelector('#form1 input[name="lname"]');
	let fname=first.value;
	let lname=last.value;
	alert(fname+" "+lname);
}
	<form id="form1" onsubmit="getFormvalue()">
		First name: <input type="text" name="fname"><br>
		Last name: <input type="text" name="lname"><br>
		<input type="submit" value="Submit">
	</form>
	
    