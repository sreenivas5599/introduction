

function validname(name){

  var name = $("name1.myform");

  if(name=="null"){

      alert("please provide currect name");

  } else{

  }
  }

function generator() {
  // Declare a digits variable
  // which stores all digits
  var phone = document.myform.phone1.value;
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}*/

/*function generateOTP()
{

    var digits = document.myform.phone1.value;

    var otpLength = 4;

    var otp = '';

    for(let i=1; i<=otpLength; i++)

    {

        var index = Math.floor(Math.random()*(digits.length));

        otp = otp + digits[index];

    }

    return otp;

}*/
