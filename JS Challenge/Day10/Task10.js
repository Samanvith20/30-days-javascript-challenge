document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target.classList.contains('childButton')) {
        console.log('Child button clicked');
    }
});

document.getElementById('addButton').addEventListener('click', function() {
    const button = document.createElement('button');
    button.textContent = 'Child Button';
    button.classList.add('childButton');
    document.getElementById('parent').appendChild(button);
});
