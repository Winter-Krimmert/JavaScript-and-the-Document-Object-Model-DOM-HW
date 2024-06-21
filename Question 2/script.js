// Function to validate form fields
function validateForm(formData) {
    // Regular expression for validating email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if name, email, and message are not empty
    if (!formData.name || !formData.email || !formData.message) {
        // Alert if any of the fields are empty or falsy
        alert('Please fill in all required fields.');
        return false; // Return false to prevent form submission
    }

    // Check if email format is valid
    if (!emailRegex.test(formData.email)) {
        // Alert if email format is not valid
        alert('Please enter a valid email address.');
        return false; // Return false to prevent form submission
    }

    // Form is valid if all checks pass
    return true; // Return true to allow form submission
}

// Event handler function for form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetch form data from input fields
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Validate form fields using the validateForm function
    if (validateForm(formData)) {
        // Display form data in console (for testing purposes)
        console.log(formData);

        // Display success message on the webpage
        let resultDiv = document.getElementById('submissionResult');
        resultDiv.innerHTML = `<p>Form submitted successfully!</p>`;
    }
}

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
