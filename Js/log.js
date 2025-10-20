document.addEventListener("DOMContentLoaded", () => {
    const navLogin = document.getElementById("nav-login");
    const navLogout = document.getElementById("nav-logout");
    const logoutLink = document.getElementById("logout-link");

    const user = localStorage.getItem("loggedInUser");
    if (user) {
        navLogin.classList.add("d-none");
        navLogout.classList.remove("d-none");
    }

    logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        alert("✅ You have been logged out successfully.");
        window.location.href = "login.html"; 
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("loggedInUser");

    
    if (!user) {
        alert("⚠️ You are not logged in!");
        window.location.href = "login.html"; 
    }

    const navLogin = document.getElementById("nav-login");
    const navLogout = document.getElementById("nav-logout");
    const logoutLink = document.getElementById("logout-link");

    if (user) {
        navLogin.classList.add("d-none");
        navLogout.classList.remove("d-none");
    }

    logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        alert("✅ You have been logged out successfully.");
        window.location.href = "login.html";
    });
});