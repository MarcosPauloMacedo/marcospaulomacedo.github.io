'use client'

import styles from './themeSwitcher.module.css'

export function ThemeSwitcher(props){
    const handleClick = async () => {
    }

    return (
        <i onClick={handleClick} className={` ${styles.icon} bi ${props.icon}`}></i>
    )
}
