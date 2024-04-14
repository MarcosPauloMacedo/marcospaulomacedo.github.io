import P from "@/app/components/Paragraph"

export function MainIntro(){
    return(
        <div id="mainIntro">
            <h1 className="mb-5">Dev. Marcos Paulo</h1>
            <P style={{color: '#791e58'}} className={'h4'}>Web developer</P>
            <P className="mb-4 mt-3 me-md-5 pe-md-5">
                Minha missão é criar designers bonitos e funcionais que ajudem a melhorar
                a experiência do usuário em qualquer dispositivo.
            </P>
        </div>
    )
}