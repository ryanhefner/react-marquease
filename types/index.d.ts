import { ForwardRefExoticComponent, PropsWithChildren } from 'react'
interface MarqueeProps extends PropsWithChildren {
  defaultOffset?: number
  reverse?: boolean
  pause?: boolean
  speed?: number
}

declare const Marquee: ForwardRefExoticComponent

export default Marquee
