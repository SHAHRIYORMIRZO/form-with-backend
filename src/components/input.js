import React, { useState } from "react";
import classes from './Input.module.css'

const Input = props => {

    const [firstName, setFirstName] = useState('')
    const [firstNameTouched, setFirstNameTouched] = useState(false);

    const [lastName, setLastName] = useState('')
    const [lastNameTouched, setLastNameTouched] = useState(false)

    const [age, setAge] = useState('')
    const [ageTouched, setAgeTouched] = useState(false)

    const [number, setNumber] = useState('')
    const [numberTouched, setNumberTouched] = useState(false)

    const [email, setEmail] = useState('')
    const [emailTouched, setEmailTouched] = useState(false)


    const firstNameIsValid = firstName.trim() !== ' ' && firstName.trim().length >= 5 && firstNameTouched;
    const lastNameIsValid = lastName.trim() !== '' && lastName.trim().length >= 5 && lastNameTouched;
    const ageIsValid = age.trim() !== '' && age.trim().length >= 2 && ageTouched;
    const numberIsValid = number.trim() !== '' && number.trim().length >= 5 && numberTouched;
    const emailIsValid = email.trim() !== '' && email.trim().length > 7 && email.includes('@gmail') && emailTouched;

    // const allTrue = firstNameIsValid && lastNameIsValid && ageIsValid && numberIsValid && emailIsValid;

    let formIsValid = firstNameIsValid && lastNameIsValid && ageIsValid && numberIsValid && emailIsValid;

    // if (allTrue) {
    //     formIsValid = true;
    // }

    const submitHandler = event => {
        event.preventDefault();
        setFirstName('');
        setLastName('');
        setAge('');
        setNumber('');
        setEmail('');
        setFirstNameTouched(false);
        setLastNameTouched(false)
        setAgeTouched(false)
        setNumberTouched(false)
        setEmailTouched(false)
    }

    const firstNameHandler = event => {
        setFirstName(event.target.value);
    }
    const firstNameBlurHandler = () => {
        setFirstNameTouched(true)
    }


    const lastNameHandler = event => {
        setLastName(event.target.value)
    }
    const lastNameBlurHandler = () => {
        setLastNameTouched(true)
    }


    const ageHandler = event => {
        setAge(event.target.value)
    }
    const ageBlurHandler = () => {
        setAgeTouched(true)
    }

    const numberHandler = event => {
        setNumber(event.target.value)
    }
    const numberBlurHandler = () => {
        setNumberTouched(true)
    }


    const emailHandler = event => {
        setEmail(event.target.value)
    }
    const emailBlurHandler = () => {
        setEmailTouched(true)
    }


    return (
        <div>
            <form onSubmit={submitHandler} className={classes.form}>
                <label
                    htmlFor="first-name">First Name:
                </label>
                <input
                    type='text'
                    id="first-name"
                    placeholder="Your First Name"
                    onChange={firstNameHandler}
                    value={firstName}
                    onBlur={firstNameBlurHandler}
                />
                {!firstNameIsValid && firstNameTouched && <p className={classes['error-text']}>Iltimos Ismingizni to'liq kiriting</p>}
                <label
                    htmlFor="last-name">Last Name:
                </label>
                <input
                    type='text'
                    id="last-name"
                    placeholder="Your Last Name"
                    onChange={lastNameHandler}
                    value={lastName}
                    onBlur={lastNameBlurHandler}
                />
                {!lastNameIsValid && lastNameTouched && <p className={classes['error-text']}>Familiyanigizni to'g'ri kiriting</p>}
                <label htmlFor="age">Age: </label>
                <input
                    type='number'
                    id="age"
                    placeholder="Your Age"
                    onChange={ageHandler}
                    value={age}
                    onBlur={ageBlurHandler}
                />
                {!ageIsValid && ageTouched && <p className={classes['error-text']}>Yoshingizni kiriting</p>}
                <label
                    htmlFor="phone">Phone Number:
                </label>
                <input
                    type='number'
                    id="phone"
                    placeholder="Your phone number"
                    onChange={numberHandler}
                    value={number}
                    onBlur={numberBlurHandler}
                />
                {!numberIsValid && numberTouched && <p className={classes['error-text']}>No'merda xatolik mavjud</p>}
                <label
                    htmlFor="email">Your Email:
                </label>
                <input
                    type='text'
                    id="email"
                    placeholder="Your Email"
                    onChange={emailHandler}
                    value={email}
                    onBlur={emailBlurHandler}
                />
                {!emailIsValid && emailTouched && <p className={classes['error-text']}>Emailda xatolik mavjud</p>}
                <button disabled={!formIsValid}>Submit Form</button>
            </form>
        </div>
    )
};

export default Input;