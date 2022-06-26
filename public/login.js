function validate() {
    var map = new Map();
    map.set("admin", "123");
    map.set("user", "123");
    map.set("test", "123");

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (map.has(username)) {
        if (map.get(username) === password) {
            window.location = "./results/welcome.html";
        } else {
            window.location = "./results/pass.html";
        }
    } else {
        window.location = "./results/user.html";
    }
}