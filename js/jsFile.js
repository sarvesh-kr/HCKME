

//--------------------------------------------Time------------------------------------------------------------------------

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

window.onload=function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('HCKME').innerHTML = `Time: ${h} : ${m} : ${s}`;
  var t = setTimeout(startTime, 1000);
}

//--------------------------------------------CALCULATOR------------------------------------------------

function calc(){
	var ch = parseInt(prompt("CALCULATOR \n1. For Addition \n2. For Subtraction \n3. For  Multiplication \n4. For Divison \n5. For Modulous \n6. For Exponent \n7. For Exit \nSelect from 1 to 7:"));
	if(ch < 7 && ch > 0){
		var a = parseFloat(prompt("Enter first number"));
		var b = parseFloat(prompt("Enter second number"));

		document.getElementById("test").innerHTML += "<br><font size=5 color=#A8A8F8><b>Calculator</b></font>";
		document.getElementById("test").innerHTML += "<br>First number is: "+ a;
		document.getElementById("test").innerHTML += "<br>Second number is: "+ b;
	}
	switch(ch)
	{

		case 1:
			document.getElementById("test").innerHTML += `<br>You choosed no ${ch} to do Addition`;
			document.getElementById("test").innerHTML += `<br>Addition of ${a} + ${b} = ${a+b}`;
			break;
		case 2:
			document.getElementById("test").innerHTML += `<br>You choosed no ${ch} to do Subtraction`;
			document.getElementById("test").innerHTML += `<br>Subtraction ${a} - ${b} = ${a-b}`;
			break;
		case 3:
			document.getElementById("test").innerHTML += `<br>You choosed no ${ch} to do Multiplication`;
			document.getElementById("test").innerHTML += `<br>Multiplication of ${a} x ${b} = ${a*b}`;
			break;
		case 4:
			document.getElementById("test").innerHTML += `<br>You choosed no ${ch} to do Division`;
			document.getElementById("test").innerHTML += `<br>Divison of ${a}/${b} = ${a/b}`;
			break;
		case 5:
			document.getElementById("test").innerHTML += `<br>You choosed no ${ch} to do Modulo`;
			document.getElementById("test").innerHTML += `<br>Modulo of ${a} % ${b} = ${a%b}`;
			break;
		case 6:
			document.getElementById("test").innerHTML += `<br>You choosed no ${ch} to do Exponent`;
			document.getElementById("test").innerHTML += `<br>Exponent of ${a}<sup>${b}</sup> = ${a**b}`;
			break;
		case 7:
			document.getElementById("test").innerHTML += `<br>You choosed no ${ch} to exit<br>Bye Bye`;
			break;
		default:
			document.getElementById("test").innerHTML += "<br>Invalid choice<br>";
	}
}
//--------------------------------------------------Lucas number-------------------------------------------------------------------


function lucasNo(){
	var no = window.prompt("How many lucas no you want to print: ");
	var noArr = [2,1];
	for(var i=0,j=1; i<no-2; i++,j++){
		noArr[i+2]=noArr[i]+noArr[j];
	}
	if(no>2){
		document.getElementById("test").innerHTML += `<br><b><font color=#A8A8F8 size=5>The sequence of the first ${no} Lucas numbers is:</font></b><br><font size=5>  =>${noArr}</font>`;
	} else if(no==1){
		document.getElementById("test").innerHTML += `<br><font size=5 color=#a8a8f8>1st Lucas no is ${noArr[0]}</font>`;
	} else if(no==2){
		document.getElementById("test").innerHTML += `<br><b><font color=#A8A8F8 size=5>The sequence of the first ${no} Lucas numbers is:</font></b><br><font size=5>  =>${noArr}</font>`;
	} else {
		document.getElementById("test").innerHTML += "<br><font color=red size=5>Invalid input</font>";
	}
}


//--------------------------------------------------------Bank FD----------------------------------------------------------------


function bankFD(){
	var accHolderName = prompt("Enter account holder name: ");
	var fdAmount = parseInt(prompt("Enter FD amount: "));
	var interestRate = alert("Your Rate of interest will be 7.5% p.a");
	var noOfYears = parseInt(prompt("Enter the no of years: "));
	var newAmount = fdAmount;
	document.getElementById("test").innerHTML += "<br><font size=5 color=#A8A8F8>Account details: </font>";
	document.getElementById("test").innerHTML += `<br><font size=4>Account holder name: ${accHolderName}`;
	document.getElementById("test").innerHTML += `<br>Invested Amount: ${fdAmount}`;
	document.getElementById("test").innerHTML += `<br>Rate of interest: 7.5% p.a`;
	for(var i=0; i<noOfYears; i++){
		fdAmount += (7.5/100)*fdAmount;
		document.getElementById("test").innerHTML += `<br>&nbsp&nbsp&nbsp${i+1} year interest = ${parseInt(fdAmount-newAmount)}`;
	}
	document.getElementById("test").innerHTML += `<br>Matured Amount: ${parseInt(fdAmount)}`;
}

//------------------------------------------------------Multiplication Table-----------------------------------------------------------

function multiplicationTable(){
	var tableNo = parseInt(prompt("Enter the multiplication table no: "));
	document.getElementById("test").innerHTML += `<br><font size=5 color=a8a8f8>Multiplication table of ${tableNo} is:</font>`;
	for(i=1; i<=10; i++){
		var table = tableNo * i;
		document.getElementById("test").innerHTML += `<br><b><font size=4>&nbsp&nbsp&nbsp${tableNo} x ${i} = ${table}</font></b>`;
	}
}

//----------------------------------------------------Palindrome------------------------------------------------------------------

function palindromeChecker(){
	var usrInput = window.prompt("Enter here to check palindrome: ");
	var str = usrInput;
	var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
	if(usrInput == newString){
		document.getElementById("test").innerHTML +=  "<br><font size=5 color=a8a8f8>\""+usrInput+"\"" + " is a palindrome &#x1f604</font>";
	} else {
		document.getElementById("test").innerHTML += "<br><font size=5 color=a8a8f8>\""+usrInput+"\"" + " is not a palindrome &#128532</font>";
	}
}

//---------------------------------------------------Form validation-----------------------------------------------------

	function validateFormAlphabet(inputChar) {
		var storeChar = 0;
		for(var i=0; i<inputChar.length; i++){
			for(var j=65; j<=90; j++){
				if(inputChar[i].toUpperCase() == String.fromCharCode(j)){
					storeChar++;
				}
			}
		}
		return storeChar;
	}
	
	function validateFormNumber(inputCharNo) {
		var storeCharr = 0;
		for(var i=0; i<inputCharNo.length; i++){
			for(var j=0; j<=9; j++){
				if(inputCharNo[i] == j){
					storeCharr++;
				}
			}
		}
		return storeCharr;
	}
	
	function validateSpecialChar(usrEmailSpclChar) {
		const spclCharList = ['@','.'];
		var atRate=0;
		var dot = 0;
		for(var i=0; i<usrEmailSpclChar.length; i++){
			if(usrEmailSpclChar[i] == '@'){
				if(usrEmailSpclChar[i+1]=='.'){
					return false;
				}
				for(var m=i+2; m<usrEmailSpclChar.length-1; m++){
					if(usrEmailSpclChar[m]=='.'){
						atRate++;
					}
				}
			}
			if(usrEmailSpclChar[i] == '.' && usrEmailSpclChar[i+1]=='.'){
				return false;
			}
			else if(usrEmailSpclChar[i]=='.'){
				dot++;
			}
		}
		if(atRate == 1) {
			return dot+1;
		} else {
			return false;
		}
	}
	
	function validateFormEmail() {
		const usrEmail = document.getElementById('regEmail').value;
		const a = validateFormAlphabet(usrEmail[0]);
		const b = validateFormNumber(usrEmail[0]);
		const c = validateFormAlphabet(usrEmail[usrEmail.length-1]);
		const d = validateFormNumber(usrEmail[usrEmail.length-1]);
		const f=a+b+c+d;
		if(f!=2){
			document.HCKMEaccount.regEmail.focus();
			document.getElementById("errorShow").innerHTML = "<br><font color='#990000'>Please enter a valid email address</font>";
			return false;
		} else {
			const spclCharEmail = validateSpecialChar(usrEmail);
			// Email validation for special characterSet
			const emailValidation = validateFormAlphabet(usrEmail)+validateFormNumber(usrEmail)+spclCharEmail;
			if(spclCharEmail != 0){
				if(emailValidation == usrEmail.length){
					return true;
				} else {
					document.HCKMEaccount.regEmail.focus();
					document.getElementById("errorShow").innerHTML = "<br><font color='#990000'>Please enter a valid email address</font>";
					return false;
				}
			} else {
				document.HCKMEaccount.regEmail.focus();
				document.getElementById("errorShow").innerHTML = "<br><font color='#990000'>Please enter a valid email address</font>";
				return false;
			}
		}
		
	}
	
	function validateFormName(){
		var nameCount = 0;
		
		for(var i=0; i<3; i++){
		 if(i===0){var regName=document.getElementById("regFirstName").value;}
		 if(i===1){var regName=document.getElementById("regMiddleName").value;}
		 if(i===2){var regName=document.getElementById("regLastName").value;}
			nameCount += validateFormAlphabet(regName);
		}
		if(regName.length != nameCount){
			document.HCKMEaccount.regFirstName.focus();
		}
		const fullName = document.getElementById("regFirstName").value + document.getElementById("regMiddleName").value + document.getElementById("regLastName").value;
		if(fullName.length != nameCount){
			document.getElementById("errorShow").innerHTML = "<br><font color='#990000'>Only A-Z, a-z chars allowed as name</font>";
			return false;
		} else {
			return true;
		}
	}
	
	function validateFormPassword(){
		const pass1 = document.getElementById('regPasss').value;
		const pass2 = document.getElementById('regCCpasss').value;
		if(pass1 == pass2 && pass1.length>=8){
			return true;
		}else{
			document.HCKMEaccount.regPasss.focus();
			document.getElementById('regPasss').value = '';
			document.getElementById('regCCpasss').value = '';
			document.getElementById("errorShow").innerHTML = "<br><font color='#990000'>Password and Confirm password should be the same<br>Password must be atleast 8 characters long</font>";
			return false;
		}
		
	}
	
	function validateForm(){
		var flag=0;
		//User input name validation-------------
		if(validateFormName() == 0){
			flag=1;
		} 
		//User input email validation-------------
		if(validateFormEmail()==0){
			flag=1;
		}
		//User input password validation----------
		if(validateFormPassword()==0){
			flag=1;
		}
		
		//Form validation-------------------------
		if(flag==0){
			return true;
		} else {
			return false;
		}

	}
	
	
//----------------------------------------------------New-------------------------------------------------------------------