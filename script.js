function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let formResponse = document.getElementById("formResponse");
    formResponse.innerHTML = `Thank you, ${name}. Your message has been sent!`;

    // Clear the form fields
    document.getElementById("contactForm").reset();
});
