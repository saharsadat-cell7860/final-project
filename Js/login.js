document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const passwordInput = document.getElementById("password");

  const eyeIcon = document.createElement("span");
  eyeIcon.style.position = "absolute";
  eyeIcon.style.top = "50%";
  eyeIcon.style.right = "15px";
  eyeIcon.style.transform = "translateY(-50%)";
  eyeIcon.style.cursor = "pointer";
  eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; 

  const parent = passwordInput.parentNode;
  parent.style.position = "relative";
  parent.appendChild(eyeIcon);

  eyeIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text"; 
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
      passwordInput.type = "password"; 
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; 
    }
  });

  // password for test 
  const testUser = {
    username: "user@example.com",
    password: "123456"
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    if (username === testUser.username && password === testUser.password) {
      alert(`🎉 Login successful! Welcome ${username}`);
      localStorage.setItem("loggedInUser", username);
      window.location.href = "index.html";
    } else {
      alert("❌ Incorrect username or password. Please try again.");
      form.reset();
      passwordInput.type = "password";
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; // ریست چشم بسته
    }
  });
});