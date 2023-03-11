import * as React from 'react'
interface MarqueeProps extends React.PropsWithChildren {
  defaultOffset?: number
  reverse?: boolean
  pause?: boolean
  speed?: number
}

declare const Marquee: React.ForwardRefExoticComponent<MarqueeProps>

export default Marquee
