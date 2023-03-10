import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Marquee from './index'

describe('react-marquease', () => {
  beforeAll(() => {
    window.innerWidth = 1024
  })

  it('renders', async () => {
    const { asFragment } = render(<Marquee>Test</Marquee>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders 2 clones', async () => {
    const { getAllByText } = render(<Marquee>Test</Marquee>)

    await getAllByText('Test')
    expect(getAllByText('Test')).toHaveLength(3)
  })
})
