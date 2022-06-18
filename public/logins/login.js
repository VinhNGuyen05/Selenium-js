function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username != "admin" && password != "1") {
        window.location = "./results/userpass.html";
    } else {
        if (username != "admin") {
            window.location = "./results/user.html";
        } else if (password != "1") {
            window.location = "./results/pass.html"; // Redirecting to other page.
        } else {
            window.location = "./results/success.html";
        }
    }
}