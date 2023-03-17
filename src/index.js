import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'

/**
 * react-marquease
 */
const Marquee = forwardRef(
  (
    {
      children,
      defaultOffset = 0,
      reverse = false,
      pause = false,
      speed = 1,
      ...rest
    },
    ref
  ) => {
    const [mounted, setMounted] = useState(false)
    const [clientHeight, setClientHeight] = useState(null)
    const [clientWidth, setClientWidth] = useState(null)
    const [offset, setOffset] = useState(defaultOffset)

    const childrenRef = useRef(null)
    const intervalRef = useRef(null)

    useEffect(() => {
      setMounted(true)
    }, [])

    useEffect(() => {
      if (mounted) {
        const handleResize = () => {
          setClientHeight(childrenRef.current?.clientHeight || 0)
          setClientWidth(childrenRef.current?.clientWidth || 0)
        }

        window.addEventListener('resize', handleResize)
        setClientHeight(childrenRef.current?.clientHeight || 0)
        setClientWidth(childrenRef.current?.clientWidth || 0)

        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }
    }, [mounted])

    useEffect(() => {
      const tick = () => {
        const direction = reverse ? 1 : -1

        setOffset((prevState) => {
          let nextOffset = prevState + direction * speed

          if (Math.abs(nextOffset) >= (childrenRef.current?.clientWidth || 0)) {
            nextOffset = 0
          }

          return nextOffset
        })
      }

      clearInterval(intervalRef.current)

      if (!pause) {
        intervalRef.current = window.setInterval(tick, 50)
      }

      return () => {
        clearInterval(intervalRef.current)
      }
    }, [childrenRef, intervalRef, pause, reverse, speed])

    const childClones = useMemo(() => {
      if (typeof window === 'undefined') return null

      const cloneCount = Math.max(
        2,
        clientWidth ? Math.ceil(window.innerWidth / (clientWidth / 2)) : 0
      )

      const direction = reverse ? 1 : -1

      return Array(cloneCount)
        .fill(0)
        .map((item, index) => (
          <div
            key={`marquee-clone-${index}`}
            data-marquee-child={index}
            style={{
              position: 'absolute',
              top: 0,
              right: reverse ? 0 : 'auto',
              transform: `translateX(${
                clientWidth * index * direction * -1
              }px)`,
            }}
          >
            {children}
          </div>
        ))
    }, [children, clientWidth, reverse])

    if (!mounted) return null

    return (
      <div
        ref={ref}
        {...rest}
        style={{
          position: 'relative',
          height: clientHeight,
          overflow: 'hidden',
        }}
      >
        <div
          ref={childrenRef}
          style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
        >
          {children}
        </div>
        <div
          data-qa="scroller"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {childClones}
        </div>
      </div>
    )
  }
)

Marquee.displayName = 'Marquee'

export default Marquee
