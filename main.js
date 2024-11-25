// script.js
document.getElementById('houseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById('houseTitle').value.trim();
    const description = document.getElementById('description').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const price = document.getElementById('price').value.trim();
    const bedrooms = document.getElementById('bedrooms').value.trim();
    const bathrooms = document.getElementById('bathrooms').value.trim();
    const squareFeet = document.getElementById('squareFeet').value.trim();
    const availabilityDate = document.getElementById('availabilityDate').value.trim();
    const contact = document.getElementById('contact').value.trim();

    let errors = [];

    // Validate Title
    if (title.length < 5) errors.push("Title must be at least 5 characters long.");

    // Validate Price
    if (price <= 0) errors.push("Price must be a positive number.");

    // Validate Square Feet
    if (squareFeet <= 0) errors.push("Square feet must be a positive number.");

    // Validate Contact Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contact)) errors.push("Contact number must be 10 digits.");

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert("House added successfully!");
        this.reset(); // Reset form
    }
});
