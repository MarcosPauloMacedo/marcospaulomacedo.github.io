import { formacoes } from '@/app/data/formacaoData'
import { poppins } from '@/app/layout'
import styles from './formacao.module.css'
import BoxFormacao from '@/app/components/BoxFormacao'

export function Formacao() {
    return(
        <section id='Formacao' className={`col-md-6 ${styles.formacao}`}>
            <h1 className={`${styles.styleTitle} ${poppins.className}`}>Formação</h1>
            <div className={`${styles.formacaoContn} d-flex flex-column`}>
                {formacoes.map((formacao, index) => {
                    return(
                        <div key={index} className='row'>
                            {formacao.map((formacaoAtual, i) => {
                                return(
                                    <BoxFormacao key={i} title={formacaoAtual.formacao} subtitle={formacaoAtual.curso} text={formacaoAtual.descricao} style={formacaoAtual.style} />
                                )}
                            )}
                        </div>
                    )}
                )}
            </div>
        </section>
    )
}