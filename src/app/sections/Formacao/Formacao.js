import { formacoes } from './dataFormacao'
import styles from './formacao.module.css'
import BoxFormacao from './BoxFormacao'
import Title from '@/app/components/Title'

export function Formacao() {
    return(
        <section id='Formacao' className={`col-md-6 ${styles.formacao}`}>
            <Title title='Formação' />
            <div className={`${styles.formacaoContn} d-flex flex-column`}>
                {formacoes.map((formacao, index) => {
                    return(
                        <div key={index} className='row'>
                            {formacao.map((formacaoAtual, i) => {
                                return(
                                    <BoxFormacao 
                                        key={i} 
                                        title={formacaoAtual.formacao} 
                                        subtitle={formacaoAtual.curso} 
                                        text={formacaoAtual.descricao} 
                                        style={formacaoAtual.style} 
                                    />
                                )}
                            )}
                        </div>
                    )}
                )}
            </div>
        </section>
    )
}