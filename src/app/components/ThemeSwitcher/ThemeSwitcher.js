'use client'

import { alterTheme } from '@/app/cookies/themes'
import styles from './themeSwitcher.module.css'

const handleClick = async () => {
    await alterTheme()
}

export function ThemeSwitcher(props){
    return (
        <i onClick={handleClick} className={` ${styles.icon} bi ${props.icon}`}></i>
    )
}
