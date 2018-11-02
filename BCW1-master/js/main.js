   	const fname = document.querySelector('[name="first_name"]');
   	const lname = document.querySelector('[name="last_name"]');
   	const email = document.querySelector('[name="email"]');
   	const phone = document.querySelector('[name="phone_number"]');
   	const post_code = document.querySelector('[name="post_code"]');
    const submit_clicked = document.querySelector('[name="submit_clicked"]');
function submit() {
	var x = true;
	if (fname.value == ""){
		document.getElementById("first_name_error").innerHTML = " *** First Name is required";
		x = false;}
	if (lname.value == ""){
		document.getElementById("last_name_error").innerHTML = " *** Last Name is required";
		x = false;}
	if (email.value == ""){
		document.getElementById("email_error").innerHTML = " *** Email is required";
		x = false;}
	if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.exec(email.value) == null) {
		document.getElementById("email_error").innerHTML = " *** Email is NOT correct";
		x = false;}
	if (phone.value != ""){
		if(/^\+[0-9]{5,}$/g.exec(phone.value) == null) {
		document.getElementById("phone_number_error").innerHTML = " *** Phone Number is NOT correct";
		x = false;}}
	if (post_code.value != ""){
		if(/^[0-9]{5}$/g.exec(post_code.value) == null) {
		document.getElementById("post_code_error").innerHTML = " *** Post Code is NOT correct";
		x = false;}
	}
    if (x == true) { 
    	document.getElementById("first_name_error").innerHTML = "";
    	document.getElementById("last_name_error").innerHTML  = "";
    	document.getElementById("email_error").innerHTML = "";
		document.getElementById("phone_number_error").innerHTML = "";
		document.getElementById("post_code_error").innerHTML ="";
    	alert('Successful.')}
}