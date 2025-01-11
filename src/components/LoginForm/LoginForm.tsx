import './LoginForm.scss'

import axios from 'axios'
import { useState } from "react"

interface Props {
    login: boolean
}

export function LoginForm({ login }: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const baseUrl = import.meta.env.VITE_API_URL

    interface User {
        email: string
        password: string
        firstName?: string
        lastName?: string
    }

    const postLogin = async (user: User) => {
        await axios.post(`${baseUrl}/login`, user)
    }

    const postRegister = async (user: User) => {
        await axios.post(`${baseUrl}/register`, user)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault()
        const user = {
            email: email,
            password: password
        }
        setEmail('')
        setPassword('')
        postLogin(user)
    }

    const handleRegister = (event: React.FormEvent) => {
        event.preventDefault()
        const user = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
        }
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        postRegister(user)
    }

    return (
        <>
            <form onSubmit={login ? handleLogin : handleRegister} className='login-form'>
                {login ? '' : (
                    <>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" value={firstName} onChange={handleFirstNameChange} />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" value={lastName} onChange={handleLastNameChange} />
                    </>
                )}
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                <button type='submit'>{login ? 'Login' : 'Register'}</button>
            </form>
        </>
    )
}