// Function to change the color of the clicked box
function changeColor(element) {
    // Generate random RGB values
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Construct RGB color string
    let randomColor = `rgb(${red}, ${green}, ${blue})`;

    // Apply the random color to the clicked box
    element.style.backgroundColor = randomColor;
    element.style.color = '#fff'; // Ensure text color contrasts with background
}
let box = document.getElementById('box');

box.addEventListener('mouseenter', function() {
    box.style.transform = 'scale(1.1)';
    box.style.transition = 'transform 0.2s ease';
});

box.addEventListener('mouseleave', function() {
    box.style.transform = 'scale(1)';
});
