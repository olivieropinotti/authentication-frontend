import './HomePage.scss'

import { useEffect, useState } from 'react'

import axios from 'axios'

export function HomePage() {
    const [name, setName] = useState('Guest')

    const baseUrl = import.meta.env.VITE_API_URL

    const getName = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/user-details`)
            setName(data.name)
        } catch (error) {
            console.error(`Error retrieving user details: ${error}`)
        }
    }

    useEffect(() => {
        getName()
    }, [])

    return (
        <div>
            <h1>{`Welcome ${name}`}</h1>
        </div>
    )
}