function validation()
{
var a = document.form.username.value;
if(a=="")
{
alert("Please Enter Your userName");
document.form.username.focus();
return false;
}
if(!isNaN(a))
{
alert("Please Enter Only Characters in user name");
document.form.username.select();
return false;
}
if ((a.length < 5) || (a.length > 15))
{
alert("user name Character must be 5 to 15 Character");
document.form.username.select();
return false;
}
var a = document.form.password.value;
if(a=="")
{
alert("Please Enter Your Password");
document.form.password.focus();
return false;
}
if ((a.length < 4) || (a.length > 8))
{
alert("Your Password must be 4 to 8 Character");
document.form.password.select();
return false;
}
var email = document.form.emailid;
if (email.value == "")
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}else
if (email.value.indexOf("@", 0) < 0)
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}else
if (email.value.indexOf(".", 0) < 0)
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
var a = document.form.phone_no.value;
if(a=="")
{
alert("please Enter the Contact Number");
document.form.phone_no.focus();
return false;
}
if(isNaN(a))
{
alert("Enter the valid Phone Number(Like : 044-42046569)");
document.form.phone_no.focus();
return false;
}
var a = document.form.address.value;
if(a=="")
{
alert("Please Enter Your ADDRESS Details Here");
document.form.address.focus();
return false;
}
}