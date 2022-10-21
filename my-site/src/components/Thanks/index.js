import React, {useEffect} from 'react'
import {Title, Button} from 'rbx'

function Thanks() {

    useEffect(()=>{
        window.addEventListener('load', RedirectPage)
    })

    const RedirectPage = function RedirectPage(){
        var timer = setTimeout(function(){
            window.location='http://localhost:3000/'}, 10000);
        return timer
    }
    return(
        <div className='pagina Contato'>
            <Title size={1}>
                Muito obrigado pelo contato!
            </Title>
            <Title size={2}>
                Você será redirecionado para a página principal em 10 segundos
            </Title>
        </div>
    )
}

export default Thanks