import { cookies } from 'next/headers'
import { theme, dark } from '@/app/cookies/themes'

export function getTheme(){
    return cookies().has(theme) ? cookies().get(theme).value : dark
}