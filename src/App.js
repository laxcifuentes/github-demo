import { useState, useEffect } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const fecthData = async () => {
  //     const url = `https://api.github.com/users/laxcifuentes`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setUser(data)
  //   }
  //   fecthData()
  // }, [])

  const display = user && <Display user={user} />

  return (
    <div>
      <Input setUser={setUser} />
      {display}
    </div>
  );
}

export default App;
