document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const nameValue = document.getElementById("name").value; // Get the value of the input field
    const h3Element = document.getElementById("url"); // Get the h3 element
    h3Element.textContent = `https://localhost:8080/?name=${encodeURIComponent(nameValue)}`; // Update the text content with the query string
});

