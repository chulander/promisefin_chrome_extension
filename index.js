'use strict';

function getRandomArbitrary(min, max) {   return parseInt(Math.random() * (max - min) + min); };
const personal_details_selector ={
    fname: '[name="fname"]',
    lname: '[name="lname"]',
    email: '[name="email"]',
    phone:'[name="phone"]',
    address_street:'[name="address_street"]',
    address_city:'[name="address_city"]',
    address_state:'[name="address_state"]',
    address_postalcode:'[name="address_postalcode"]',
    birth_month:'[name="birth_month"]',
    birth_day:'[name="birth_day"]',
    birth_year:'[name="birth_year"]',
    citizenship:'[name="citizenship"]',
    ssn:'[name="ssn"]',
    income:'[name="income"]',
    employment_stats:'[name="employment_status"]',
    tensure_at_employer:'[name="tenure_at_employer"]',
}

const personal_details_data = {
    fname: 'TRAVIS',
    lname: 'RIDDLE',
    get email(){
        return `${this.fname}${this.lname}@dev.promisefinancial.co`;
    },
    get phone(){
        return `(555) ${getRandomArbitrary(100,999)}-${getRandomArbitrary(1000,9999)}`;
    },
    address_street: '906 NW CT',
    address_city:'BENTONVILLE',
    address_state:'AZ',
    address_postalcode:'72712',
    birth_month:`${getRandomArbitrary(1,13)}` ,
    birth_day:`${getRandomArbitrary(1,29)}`,
    birth_year:`${getRandomArbitrary(1950,2001)}`,
    citizenship:'USA Citizen',
    ssn:'666-32-0054',
    income: `100,000`,
    employment_stats:'Employed',
    tensure_at_employer:'5',
}

const personal_details = document.querySelector('form[name=form-personal-details]');
Reflect.ownKeys(personal_details_selector).forEach(item=> {
    personal_details.querySelector(personal_details_selector[item]).value = personal_details_data[item];
});


document.addEventListener('DOMContentLoaded', function(){
    const personal_details = document.querySelector('form[name=form-personal-details]');
    console.log('what is personal details', personal_details)
    Reflect.ownKeys(personal_details_selector).forEach(item=> {
        personal_details.querySelector(personal_details_selector[item]).value = personal_details_data[item];
    });


})