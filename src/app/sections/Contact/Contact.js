import contactStyles from './contact.module.css';

export function Contact(){
    return(
        <section className={`${contactStyles.contact} d-flex flex-column justify-content-center col-md-6`} id="Contato">
            <div className={`${contactStyles.form} ps-5 pe-5 ms-md-5 me-md-5 d-flex flex-column position-relative`}>
                <h2 className={`${contactStyles.title} text-center mb-3`}>Contato</h2>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nome</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Digite seu nome completo" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Telefone</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="DDD - 99999-9999" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Assunto</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" className={`${contactStyles.styleButton} position-absolute`}>Enviar</button>
            </div>
        </section>
    )
}