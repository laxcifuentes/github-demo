function Display({ user }) {
    return (
        <div>
            <h1>{user.login}</h1>
            <img src ={user.avatar_url} alt="profile pic"/>
            <p>Profile: <a href={user.html_url} target='blank'>HERE</a></p>
            {user.location && <p>Location: {user.location}</p>} 
            {user.company && <p>Company: {user.company}</p>}
            {user.blog && <p>Blog: {user.blog}</p>}
        </div>
    )
}

export default Display