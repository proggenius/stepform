const fromItems = document.getElementsByClassName('form-item');
const button = document.getElementsByClassName('btn');
const steps = document.getElementsByClassName('step');


let currentFormItem = 0;
fromItems[currentFormItem].style.display = 'block';

if(currentFormItem == 0) {
    button[0].style.display = 'none';
    steps[0].style.backgroundColor = '#1e9df7';
}

//Next Button
button[1].addEventListener('click', () => {
    currentFormItem++;
    const prevFormItem = currentFormItem - 1;

    if (currentFormItem > 0 && currentFormItem < 4) {
        button[0].style.display = 'inline-block';

        fromItems[currentFormItem].style.display = 'block';
        fromItems[prevFormItem].style.display = 'none';

        steps[currentFormItem].style.backgroundColor = '#1e9df7';

        if(currentFormItem == 3) {
            button[1].innerHTML = 'Submit';
        }
    }else {
        if(currentFormItem > 3) {
            alert('Form Successfully )))');
        }
    }
});

// Prev Button
button[0].addEventListener('click', () => {
    if(currentFormItem > 0) {
        currentFormItem--;

        const nextFormItem = currentFormItem + 1;
        fromItems[currentFormItem].style.display = 'block';
        fromItems[nextFormItem].style.display = 'none';

        steps[nextFormItem].style.backgroundColor = '#cfd2d4';

        if(currentFormItem == 0) {
            button[0].style.display = 'none';
        }

        if(currentFormItem < 3) {
            button[1].innerHTML = 'Next';
        }
    }
})

