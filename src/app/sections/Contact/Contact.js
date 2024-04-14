'use client'

import FormControl from '@/app/components/FormControl'
import contactStyles from './contact.module.css'
import TextArea from '@/app/components/TextArea'
import Form from '@/app/components/Form'
import P from '@/app/components/Paragraph'

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
            <Form onSubmit={onSubmit}>
                <P className={`${contactStyles.title} text-center mb-3 fs-2 fw-semibold`}>Contato</P>
                <FormControl 
                    label='Nome' 
                    name='nome'
                    placeholder='Digite seu nome completo' 
                />
                <FormControl 
                    label='Telefone' 
                    name='cel'
                    placeholder='DDD - 99999-9999' 
                />
                <TextArea label='Assunto' name='assunto'/>
            </Form>
        </section>
    )
}