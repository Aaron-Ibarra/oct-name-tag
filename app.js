// grab DOM elements

// set event listeners
// getElementById
const nameDisplay = document.getElementById('name');
console.log(nameDisplay);

//DOM SETTER METHODS
//textContent
nameDisplay.textContext = 'Aaron';
nameDisplay.classList.add('black');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('i am clicking the button');
    //grab the input element
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
});

const updateBtn2 = document.getElementById('update-btn2');
updateBtn2.addEventListener('click', () => {
    const colorInput = document.getElementById('color-input');
});
