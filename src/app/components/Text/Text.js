'use client'

const theme = {
    text: {
        h1: {
            fontSize: '2.5rem',
            marginBottom: '3rem',
        },
        h2: {
            fontSize: '1.2rem',
            marginBotton: '0'
        },
        h4: {
            fontSize: '1rem',
            marginBottom: '1.5rem',
        },
        h6: {
            fontSize: '0.75rem',
            marginBottom: '0.6rem'
        },
        p: {
            fontSize: 'auto',
            marginBottom: '0'
        }

    }
}

export function Text(props){
    const { tag, style, className, children} = props
    const Tag = tag

    const combinedStyle = {
        fontSize: theme.text[tag].fontSize,
        marginBottom: theme.text[tag].marginBottom,
        ...style
    }

    return(
        <Tag style={combinedStyle} className={className}>{children}</Tag>
    )
}