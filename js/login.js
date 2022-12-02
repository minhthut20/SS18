// con mắt ở phần nhập mật khẩu 
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});


password.addEventListener('input', function () {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{8,15}$/;
    let alert0 = document.getElementById("alert0");
    if (password.value.match(decimal)) {
        document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, and length 8-15";
        alert0.style.color = 'green';
        return true;
    }
    else {
        document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, and length 8-15";
        alert0.style.color = 'red';
        return false;
    }
})


let email = document.querySelector("#email")
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let alertEmail = document.querySelector("#alertEmail");
email.addEventListener('input', function () {
    if (email.value.match(mailformat)) {
        alertEmail.innerHTML = "Valid Email";
        alertEmail.style.color = "green"
    }
    else {
        alertEmail.innerHTML = "Invalid email address"
        alertEmail.style.color = "red"
    }
})

function validate() {
    if(email.value == localStorage.getItem("email")){
        if(password.value == localStorage.getItem("password")){
            alert("Đăng nhập thành công")
            return true
        }
        else {
            alert("Mật khẩu không chính xác")
            return false
        }
    }
    else {
        alert("Tài khoản không tồn tại")
        return false
    }
}

