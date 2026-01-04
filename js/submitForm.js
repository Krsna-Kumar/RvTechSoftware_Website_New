document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Check required fields
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("SelectAService").value;
    const recaptchaResponse = grecaptcha.getResponse();

    if (!fullname || !email || !phone || !service || service === "Select") {
        showPopup("Please fill in all required fields.", "warning");
        return;
    }

    // Check if reCAPTCHA is completed
    if (recaptchaResponse === "") {
        showPopup("Please complete the reCAPTCHA before submitting.", "warning");
        return;
    }

    const form = event.target;

    try {
        // Submit the form data to Google Forms
        form.submit(); // Form will submit to hidden iframe

        // Show success popup on the same page
        showPopup("Your form has been successfully submitted!", "success");
    } catch (error) {
        showPopup("There was an error submitting the form. Please try again.", "warning");
    } finally {
        // Clear the form and reset reCAPTCHA
        form.reset();
        grecaptcha.reset();
    }
});

// Popup function
function showPopup(message, type) {
    const popup = document.createElement("div");
    popup.innerText = message;

    popup.style.position = "fixed";
    popup.style.top = "20%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "15px 30px";
    popup.style.color = "#fff";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.2)";
    popup.style.zIndex = "1000";
    popup.style.opacity = "0";
    popup.style.animation = "fadeIn 0.5s forwards";

    // Set background color based on message type
    popup.style.backgroundColor = type === "success" ? "#28a745" : "#ffc107"; // Green for success, yellow for warning

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => popup.remove(), 500);
    }, 5000);
}
