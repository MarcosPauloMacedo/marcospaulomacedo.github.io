'use client'

import contactStyles from './contact.module.css';

export function Contact(){

    const email = 'marcospaulomacedo@gmail.com'

    async function onSubmit(event) {
        event.preventDefault()

        let form = new FormData(event.target)

        let data = {
            nome: form.get('nome'),
            cel: form.get('cel'),
            assunto: form.get('assunto')
        }
    
        let link = `mailto: ${email}?subject= ${data.assunto} &body= ${data.nome} - ${data.cel}` 
        window.open(link, '_blank')
        event.target.reset()
    }

    return(
        <section className={`${contactStyles.contact} d-flex flex-column justify-content-center col-md-6`} id="Contato">
            <form onSubmit={onSubmit} className={`${contactStyles.form} ps-5 pe-5 ms-md-5 me-md-5 d-flex flex-column position-relative`}>
                <h2 className={`${contactStyles.title} text-center mb-3`}>Contato</h2>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digite seu nome completo" name='nome'/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Telefone</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="DDD - 99999-9999" name='cel' />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Assunto</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='assunto'></textarea>
                </div>
                <button type="submit" className={`${contactStyles.styleButton} position-absolute`}>Enviar</button>
            </form>
        </section>
    )
}