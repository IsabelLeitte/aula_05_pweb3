import Button from "./evento/Button";

function Eventos () {
    function meuPrimeiro () {
        console.log("primeiro evento ativado!!")
    }
    function meuSegundo () {
        console.log("segundo evento ativado!!")
    }
    return(
        <>
            <p>Clique para disparar um evento</p>
            <Button  event={meuPrimeiro} text="primeiro disparo do evento"/>
            <Button  event={meuSegundo} text="Segundo disparo do evento"/>
        </>
    )
}
export default Eventos;