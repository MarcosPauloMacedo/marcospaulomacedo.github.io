'use client'

import alterTheme from '@/app/server/alterTheme'
import styles from './themeSwitcher.module.css'

export function ThemeSwitcher(props){
    const handleClick = async () => {
        await alterTheme()
    }

    return (
        <i onClick={handleClick} className={` ${styles.icon} bi ${props.icon}`}></i>
    )
}
