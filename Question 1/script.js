// Product data array with different products
let products = [
    { name: "Laptop", price: 1099.99, description: "Powerful gaming laptop with high-performance specs" },
    { name: "Smartwatch", price: 299.99, description: "Track your fitness and receive notifications on the go" },
    { name: "Camera", price: 799.50, description: "Professional-grade DSLR camera with 4K video recording" },
    { name: "Bluetooth Speaker", price: 99.95, description: "Portable speaker with 360-degree sound and waterproof design" },
    { name: "Robot Vacuum Cleaner", price: 399.00, description: "Smart robotic vacuum with mapping technology for efficient cleaning" }
];

// Function to display products on the webpage
function displayProducts() {
// Get the container element where products will be displayed
// This line uses the document.getElementById method to retrieve the HTML element with the id 'product-container'.
// 'product-container' is a <div> element defined in the HTML markup, which serves as the designated area
// where product information will be dynamically inserted.
let container = document.getElementById('product-container');

    // Clear any existing content inside the container
    container.innerHTML = '';

    // Loop through each product in the array
    products.forEach(product => {
        // Create a new <div> element for each product
        let productDiv = document.createElement('div');
        productDiv.classList.add('product'); // Add a CSS class to style the product

        // Create an <h3> element for the product name
        let nameElement = document.createElement('h3');
        nameElement.textContent = product.name; // Set the text content to the product name

        // Create a <p> element for the product price
        let priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${product.price.toFixed(2)}`; // Set the text content to the formatted price

        // Create another <p> element for the product description
        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description; // Set the text content to the product description

        // Append the name, price, and description elements to the product <div>
        productDiv.appendChild(nameElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(descriptionElement);

        // Append the product <div> to the container in the HTML
        container.appendChild(productDiv);
    });
}

// Event listener to display products when the page loads
// This event listener waits for the 'load' event, which triggers when all resources
// (such as images and scripts) have finished loading on the webpage.
// When the 'load' event occurs, the specified function is executed, in this case,
// an arrow function that calls the displayProducts function.
// Its purpose is to ensure that the displayProducts function is only called once
// the entire webpage has loaded, guaranteeing that product information is presented
// correctly without any delay or incomplete rendering.
window.addEventListener('load', (event) => {
    displayProducts(); // Call the displayProducts function to initially display the products
});


// Purpose: Displaying product information dynamically
// We use JavaScript to dynamically generate HTML elements and populate them with product data.
// This approach allows us to separate content (data) from presentation (HTML structure),
// making the webpage more flexible and maintainable. It also enables us to easily update
// or modify the product information without needing to manually edit the HTML markup for each change.
