import { useState, useEffect } from "react";

function Input({ setUser }) {
    const [username, setUsername] = useState('')

useEffect(() => {
    const fetchData = async () => {
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url)
        const data = await response.json()
        setUser(data)
    }
    if (username) fetchData()
    }, [username])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url)
        const data = await response.json()
        setUser(data)
        setUsername('')

    }

    const clear = () => {
        setUsername('')
        setUser(null)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={username}onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <input type='submit' />
            </form>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

export default Input