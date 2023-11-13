import mainStyle from './main.module.css'

export function MainIntro(){
    return(
        <div id="mainIntro" className={mainStyle.textAlignJustify}>
            <h1 className="mb-5">Dev. Marcos Paulo</h1>
            <h4 style={{color: '#791E58'}}>Web developer</h4>
            <p className="mb-4 mt-3 me-md-5 pe-md-5">
                Minha missão é criar designers bonitos e funcionais que ajudem a melhorar
                a experiência do usuário em qualquer dispositivo.
            </p>
        </div>
    )
}