document.getElementById("LoginInForm").addEventListener("submit", function(e) {
  e.preventDefault(); // يمنع الفورم من إعادة تحميل الصفحة

  const UserName = document.getElementById("UserName").value.trim();
  const password = document.getElementById("password").value.trim();
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // تحقق من المستخدم
  const user = users.find(u => u.username.toLowerCase() === UserName.toLowerCase());
if (!user) {  
  Swal.fire({
    icon: 'warning',
    title: 'User not found',
    text: 'This username is not registered. Please Sign Up first!',
    confirmButtonText: 'Go to Sign Up',
    confirmButtonColor:'#1D4358'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "Sing_Up.html";
    }
  });
}else if (user.password !== password) {
    // اليوزر موجود لكن الباسورد غلط
    Swal.fire({
      icon: 'error',
      title: 'Wrong password',
      text: 'The password you entered is incorrect. Please try again!',
      confirmButtonText: 'Retry',
      confirmButtonColor:'#1D4358'
    });
  }else {
    // تسجيل الدخول ناجح
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Welcome back ' + user.username,
      confirmButtonText: 'Go to Home',
      confirmButtonColor:'#1D4358'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "home.html";
      }
    });
  }
});