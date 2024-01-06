import { useState } from "react";

function Input({ setUser }) {
    const [username, setUsername] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url)
        const data = await response.json()
        setUser(data)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Input