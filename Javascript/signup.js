function signup(){
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var course = document.getElementById('course').value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Password',password);
    localStorage.setItem('Course',course)

    window.location.href="/profile.html"
}