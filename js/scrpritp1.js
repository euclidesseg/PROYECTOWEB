let nav = document.querySelector(`.nav`);
let btnRegister = document.querySelector(`#register`);
let btnLogIn = document.querySelector(`#log-in`);
nav.addEventListener(`click`, (event) => {
    if(event.target.classList.contains(`register`)){
        btnRegister.style.backgroundColor = `#159c93`;
        btnLogIn.style.backgroundColor = `black`;
    }
    if(event.target.classList.contains(`log-in`)){
        btnRegister.style.backgroundColor = `black`;
        btnLogIn.style.backgroundColor = `#159c93`;
    }
})
