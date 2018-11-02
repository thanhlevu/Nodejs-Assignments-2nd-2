
const element = document.querySelector('input[name = "firstname"]');
element = 'meo';
document.querySelector('submit').addEventListener("click", Submit);
function Submit(){
if (element = ''){
	alert('Buzz');
}	
}