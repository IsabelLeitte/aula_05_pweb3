import {useState} from 'react';


function condicional (){
    const [email, setUserEmail] = useState ();

    function enviarEmail (event){
        event.preventDefault()
        console.log("TESTANDO")
    }

    return(
        <div>
            <h2>Cadastro um E-mail:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail..."
                    onChange={() => setUserEmail(event.target.value)}>
                </input>
                <button 
                    type="submit" 
                    onClick={enviarEmail}> Enviar E-mail 
                </button>
            </form>
        </div>
    )
}
export default condicional;