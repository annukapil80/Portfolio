
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hire Me Button
document.getElementById("hireMeBtn").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/anant-kapil-417101353", "_blank");
});

// View Projects Button
document.getElementById("ProjectsBtn").addEventListener("click", function () {
    window.open("https://github.com/annukapil80", "_blank");
});

// Contact Form Handling
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Form submit hone se rokna

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = "";

    // Validation
    if (name === "") {
        errorMessage += "Name is required.\n";
    }
    if (email === "") {
        errorMessage += "Email is required.\n";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage += "Enter a valid email address.\n";
    }
    if (message === "") {
        errorMessage += "Message cannot be empty.\n";
    }

    // Show Error or Success Message
    if (errorMessage !== "") {
        alert(errorMessage); // Show errors
    } else {
        alert("Message sent successfully!");
        document.querySelector("form").reset(); // Form clear karna
    }
});
