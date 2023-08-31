import { Lora, Roboto } from 'next/font/google'
 
export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--body-'
})
 
export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700", "900"],
  variable: '--primary-'

})