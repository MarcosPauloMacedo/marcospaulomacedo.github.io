'use client'

const theme = {
    text: {
        h1: {
            fontSize: '2.5rem',
            marginBottom: '3rem',
        },
        h2: {
            fontSize: '20px',
            marginBotton: '0'
        },
    }
}

export function Text(props){
    const { tag, className, children} = props
    const Tag = tag || 'p'

    return(
        <>
            <Tag className={className}>{children}</Tag>

            <style jsx>{`
                ${Tag} {
                    font-size: ${theme.text[tag].fontSize};
                    margin-bottom: ${theme.text[tag].marginBottom};
                }
            `}</style>
        </>
    )
}