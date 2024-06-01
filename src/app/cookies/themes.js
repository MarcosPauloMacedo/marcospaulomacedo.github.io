'use server'

import { cookies } from "next/headers"

const theme = 'theme'
const dark = 'dark'
const light = 'light'

async function setTheme(value){
    cookies().set(theme, value)
}

async function hasTheme(){
    return cookies().has(theme)
}

export async function getTheme(){
   if(hasTheme()){
       return cookies().get(theme).value
   }

    return dark
}

export async function alterTheme(){
    const theme = await getTheme()
    const newTheme = theme === dark ? light : dark
    setTheme(newTheme)
}

