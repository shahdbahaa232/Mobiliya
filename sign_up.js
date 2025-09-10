  
function loadFile(event)
{
  const image = document.getElementById('profile-pic');
  image.src = URL.createObjectURL(event.target.files[0]);
}

document.getElementById("signUpForm").addEventListener("submit", function(e) {
  e.preventDefault(); // يمنع الفورم من إعادة تحميل الصفحة
  // json 
  const username = document.getElementById("UserName").value.trim();
  const password = document.getElementById("password").value.trim();
  
  let users =JSON.parse(localStorage.getItem("users")) || [];

  // تأكد إن اليوزر مش موجود قبل كده
  const exists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
  if (exists) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This username already exists, please login!',
      confirmButtonText: 'Go to Login',
      confirmButtonColor:'#1D4358'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "login.html";
      }
    });
    return;
  }
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  Swal.fire({
    icon: 'success',
    title: 'Account Created!',
    text: 'You can login now.',
    confirmButtonText: 'Go to Login',
    confirmButtonColor:'#1D4358'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "login.html";
    }
  });

});



