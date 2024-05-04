'use client'

import { setCookie } from 'nookies';
import styles from './themeSwitcher.module.css'

export function ThemeSwitcher(){

    function alterTheme(){
        
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        setCookie(null, 'theme', newTheme, { path: '/' });
    }

    return (
        <i onClick={alterTheme} className={` ${styles.icon} bi bi-moon-stars-fill`}></i>
    );
}
