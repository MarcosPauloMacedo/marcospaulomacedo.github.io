'use server'

import { cookies } from "next/headers"
import { theme, dark, light } from "../cookies/themes"

export default async function alterTheme(){
    if(cookies().has(theme)){
        const themeValue = cookies().get(theme).value
        const newTheme = themeValue === dark ? light : dark
        cookies().set(theme, newTheme)
    } else {
        cookies().set(theme, light)
    }
}