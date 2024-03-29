import React from 'react'
import { render } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'
import Marquee from './index'

describe('react-marquease', () => {
  beforeAll(() => {
    window.innerWidth = 1024
  })

  it('renders', async () => {
    const { asFragment } = render(<Marquee>Test</Marquee>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders 5 clones', async () => {
    const { getAllByText } = render(<Marquee>Test</Marquee>)

    await getAllByText('Test')
    expect(getAllByText('Test')).toHaveLength(6)
  })
})
