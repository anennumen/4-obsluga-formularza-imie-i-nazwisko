console.log(`WARSZTAT - Obsługa formularza'Imię i nazwisko'`);

const submitForm = (event) =>{
    event.preventDeFault();

    let fName= document.querySelector('[name="fname');
    let lastName = document.querySelector('[name="lname"]')

console.log(`Imie: ${firstName.value} , Nazwisko; ${lastName.value}`);
}


let form = document.getElementById('form');

form.addEventListener('submit', submitForm);

