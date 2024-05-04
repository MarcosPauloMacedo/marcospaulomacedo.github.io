'use client'

import FormControl from '@/app/components/FormControl'
import contactStyles from './contact.module.css'
import TextArea from '@/app/components/TextArea'
import Form from '@/app/components/Form'
import Text from '@/app/components/Text'
import { useRef } from 'react'

class Data {
    constructor(name, phone, subject){
        this.isPhone = this.validatePhone(phone)
        this.isName = this.validateText(name)
        this.isSubject = this.validateText(subject)
    }

    validatePhone(phone){
        let regex = /\(\d{3}\) \d{5}-\d{4}/
        return regex.test(phone)
    }

    validateText(text){
        return text.replace(/\s/g, '').length > 0
    }
}

export function Contact(){

    const email = 'marcospaulomacedo@gmail.com'
    const [name, phone, subject] = ['name', 'phone', 'subject']
    const [nameRef, phoneRef, subjectRef] = [useRef(), useRef(), useRef()]

    function createLink(data){
        let link = `mailto: ${email}?subject= ${data.assunto} &body= ${data.nome} - ${data.cel}` 
        return link
    }

    function enviarEmail(data){
        let link = createLink(data)
        window.open(link, '_blank')
    }

    async function onSubmit(event) {
        event.preventDefault()
        
        let form = new FormData(event.target)
        let data = new Data(form.get(name), form.get(phone), form.get(subject))

        if(!data.isName){
            nameRef.current.focus()
            return
        }

        if(!data.isPhone){
            phoneRef.current.focus()
            return
        }

        if(!data.isSubject){
            subjectRef.current.focus()
            return
        }

        enviarEmail(data)
        event.target.reset()
    }

    return(
        <section className={`${contactStyles.contact} d-flex flex-column justify-content-center padding-top-nav`} id="Contato">
            <Form onSubmit={onSubmit}>
                <Text 
                    tag='p' 
                    className={`${contactStyles.title} text-center mb-3 fs-2 fw-semibold`}>
                        Contato
                </Text>
                <FormControl 
                    inputRef={nameRef}
                    label='Nome' 
                    id={name}
                    required
                    name={name}
                    autoComplete='name'
                    placeholder='Digite seu nome completo' 
                />
                
                <FormControl
                    inputRef={phoneRef}
                    label='Telefone'
                    id={phone}
                    required	
                    name={phone}
                    autoComplete='tel'
                    mask="(999) 99999-9999"
                    placeholder='(DDD) 99999-9999'
                    pattern='\(\d{3}\) \d{5}-\d{4}'
                    title='Digite um número de celular válido!'
                />
                <TextArea 
                    textAreaRef={subjectRef} 
                    label='Assunto' 
                    id={subject} 
                    required
                    name={subject}
                />
            </Form>
        </section>
    )
}