
  /*==============================
    OTP js 
 =====================================*/
let timerOn = true;

function timer(remaining) {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;

  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  document.getElementById('timer').innerHTML = m + ':' + s;
  remaining -= 1;

  if (remaining >= 0 && timerOn) {
    setTimeout(function () {
      timer(remaining);
    }, 1000);
    return;
  }

  if (!timerOn) {
    // Do validate stuff here
    return;
  }

  // Do timeout stuff here
  let timerEl = document.querySelector('.time');
  let resendOtp = document.querySelector('.resend-otp');

  timerEl.style.setProperty('display', 'none', 'important');
  resendOtp.style = 'color:rgb(var(--body)); cursor:pointer;';

  let stop = true;
  resendOtp.addEventListener('click', function () {
    if (stop) {
      timerEl.style = 'display: inline-block';
      resendOtp.style = 'color:#7690AC; curser:not-allowed;';
      stop = false;
      timer(30);
    }
  });
}
timer(30);

//// Otp Input Js////
let digitValidate = function (ele) {
  ele.value = ele.value.replace(/[^0-9]/g, '');
};

let tabChange = function (val) {
  let ele = document.querySelectorAll('input');
  if (ele[val - 1].value != '') {
    ele[val]?.focus();
  } else if (ele[val - 1].value == '') {
    ele[val - 2].focus();
  }
};
