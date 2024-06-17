
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const handleSubmit = (e)=>{
    e.preventDefault();
    const input = document.querySelector('.input');
    const errors = document.querySelectorAll('.error');
    if(isValidEmail(input.value)){
        errors.forEach((elem)=>{
            elem.classList.add('noerror');
        });
        alert('Email sended to: '+input.value);
        input.value='';
    }
    else{
        errors.forEach((elem)=>{
            elem.classList.remove('noerror');
        });
    }
}

const form = document.querySelector('.form');
form.addEventListener("submit", handleSubmit);