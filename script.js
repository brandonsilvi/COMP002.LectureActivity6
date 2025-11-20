const savedColor = localStorage.getItem('favoriteColor');
if (savedColor) {
    console.log('Saved favorite color:', savedColor);
}

const form = document.getElementById('theForm');
const colorInput = document.getElementById('colorInput');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('favoriteColor', colorInput.value);
    console.log('Color saved:', colorInput.value);
});