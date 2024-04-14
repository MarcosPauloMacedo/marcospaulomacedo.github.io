import { formacoes } from './dataFormation'
import styles from './formation.module.css'
import FormationBox from './FormationBox'

export function FormationContn() {
    return(
        <div className={`${styles.formacaoContn} d-flex flex-column`}>
            {formacoes.map((formacao, index) => {
                return(
                    <div key={index} className='row'>
                        {formacao.map((formacaoAtual, i) => {
                            return(
                                <FormationBox 
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
    )
}