document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value; // Get name value
    const year = document.getElementById('year').value; // Get year value

    const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`; // Construct query string

    const urlElement = document.getElementById('url'); // Get h3 element
    urlElement.textContent = `https://localhost:8080/${queryString}`; // Update h3 text content
});
