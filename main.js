const menu = document.getElementById("menu")
const navLink = document.getElementById("nav")
const closeBtn = document.querySelector(".close")

menu.addEventListener("click", ()=>{
  navLink.style.right = 0
  
})
closeBtn.addEventListener("click", ()=>{
  console.log("close")
  navLink.style.right = "-200px"
})
    function fakeSuccess() {
      const email = document.getElementById('email').value;
      const successMsg = document.getElementById('success-message');
      const errorMsg = document.getElementById('error-message');

      if (!email.endsWith("@gmail.com")) {
        errorMsg.innerText = "Only Gmail addresses are allowed.";
        successMsg.innerText = "";
        return false;
      }
       
      successMsg.innerText = "Your message has been sent successfully!";
      errorMsg.innerText = "";
     
      // Clear form fields
      document.getElementById('fullname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      return false; // Prevent real submission
    }
  


