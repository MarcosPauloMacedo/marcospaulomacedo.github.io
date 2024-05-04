'use client'

import { Suspense, useEffect } from "react";
import { parseCookies } from "nookies";

export async function Theme(){
    return(
        <Suspense >
            <_Theme />
        </Suspense>
    )
}

async function _Theme(){
    useEffect(() => {
        const getTheme = parseCookies('theme')

        if (getTheme) {
            document.documentElement.setAttribute('data-theme', getTheme.theme);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    return null
}