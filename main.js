

// დავალება:


// 1. არსებულ ფორმში დაამატეთ 3 ველი personal_number, mobile_number, position

// 2.  personal_number - ვალიდაცია:  სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 11 ის ტოლი.

// 3.  mobile_number - ვალიდაცია: სავალდებულოა, უნდა შედგებოდეს 9 სიმბოლოსგან (მაგ. 599256060).

// 4. position - ვალიდაცია: არ არის სავალდებულო, მაქსიმალური სიმბოლების რაოდენობა 30.



// 5. ფორმი ჩავსვათ მოდალში რომელიც ლექციაზე გავაკეთეთ, ღილაკზე დაკლიებით უნდა გამოჩნდეს მოდალი სადაც ფორმი იქნება ჩასმული. 

// 6. ფორმის საბმითზე თუ ყველა ველი ვალიდურია მოდალი უნდა დაიხუროს თუ არ არის ვალიდური არ დაიხუროს.








const form = document.querySelector('#user-login-form');
const personalNumberInput = document.querySelector('input[name="personal-number"]');
const mobileNumberInput = document.querySelector('input[name="mobile-number"]');


form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log(validatePersonalNumber())
    console.log(validateMobileNumber())
    console.log(personalNumberInput.value)
    console.log(mobileNumberInput.value)
})

function validatePersonalNumber(){
    if(!personalNumberInput.value.length<12 && !personalNumberInput.value.includes([0-9])){
        personalNumberInput.classList.add('has-error');
        personalNumberInput.parentNode.querySelector('.error-message').innerText = 'min 11 number';
        return false;
    }
    personalNumberInput.classList.remove('has-error');
    personalNumberInput.parentNode.querySelector('.error-message').innerText = '';
    return true;


};

 function validateMobileNumber(){
     if(mobileNumberInput.value.length<9 && !personalNumberInput.value.includes([0-9])){
        mobileNumberInput.classList.add('has-error');
        mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'min 9 number';
        return false;
     }
     mobileNumberInput.classList.remove('has-error');
     mobileNumberInput.parentNode.querySelector('.error-message').innerText = '';
     return true;
 }


const modalOpenBtn = document.querySelector('#open-modal');
modalOpenBtn.addEventListener('click', () => {
openModal('.my-modal');
})

function openModal(modalSelector){
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.add('visible');
  const modalCloseBtn = modalNode.querySelector('.modal-close');
  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalSelector)
  })
}

function closeModal(modalSelector){
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove('visible');
}












