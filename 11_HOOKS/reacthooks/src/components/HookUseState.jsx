import {useState} from 'react'

const HookUseState = () => {
    //1 - useState
    let userName = "Lorran";

    const [name, setName] = useState("Matheus");

    const changeNames = () => {
      userName = "João Souza";
      
      setName("Lorran Dias");

      console.log(userName); 
    }

      console.log(name);


  return (
    <>
        {/* {1 - useState} */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name} </p>
        <button onClick={changeNames} >Mudar Nomes!</button>
        
    <hr />
    </>
  )
}

export default HookUseState