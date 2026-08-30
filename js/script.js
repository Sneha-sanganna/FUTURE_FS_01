const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});


// Contact Form Submission

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                contactForm.reset();

                successMessage.textContent =
                    "✓ Message sent successfully!";

                successMessage.style.display = "block";

            } else {

                successMessage.textContent =
                    "✕ Something went wrong. Please try again.";

                successMessage.style.display = "block";
            }

        } catch (error) {

            successMessage.textContent =
                "✕ Unable to send message. Please try again.";

            successMessage.style.display = "block";
        }

    });

}

