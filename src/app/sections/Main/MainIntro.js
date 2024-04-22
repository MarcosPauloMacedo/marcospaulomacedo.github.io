import { Text } from '@/app/components/Text/Text'

export function MainIntro(){
    return(
        <div>
            <Text tag='h1'>Dev. Marcos Paulo</Text>
            <Text tag='p' style={{color: 'var(--secondary)'}} className='h4'>
                Web developer
            </Text>
            <Text tag='p' className='mb-4 mt-3'>
                Minha missão é criar designers bonitos e funcionais que ajudem a melhorar
                a experiência do usuário em qualquer dispositivo.
            </Text>
        </div>
    )
}