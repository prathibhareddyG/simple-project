function validationform()
{
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
var a = document.form.pass.value;
if(a=="")
{
alert("Please Enter Your Password");
document.form.pass.focus();
return false;
}
if ((a.length < 4) || (a.length > 8))
{
alert("Your Password must be 4 to 8 Character");
document.form.pass.select();
return false;
}
}