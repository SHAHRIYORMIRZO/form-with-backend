import React, { useState } from "react";
import classes from './Input.module.css'

const Input = props => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')



    return (
        <div>
            <form className={classes.form}>
                <label
                    htmlFor="first-name">First Name:
                </label>
                <input
                    type='text'
                    id="first-name"
                    placeholder="Your First Name"
                />
                <label
                    htmlFor="last-name">Last Name:
                </label>
                <input
                    type='text'
                    id="last-name"
                    placeholder="Your Last Name"
                />
                <label htmlFor="age">Age: </label>
                <input
                    type='number'
                    id="age"
                    placeholder="Your Age"
                />
                <label
                    htmlFor="phone">Phone Number:
                </label>
                <input
                    type='number'
                    id="phone"
                    placeholder="Your phone number "
                />
                <label
                    htmlFor="email">Your Email:
                </label>
                <input
                    type='email'
                    id="email"
                    placeholder="Your Email"
                />
                <button>Submit Form</button>
            </form>
        </div>
    )
};

export default Input;