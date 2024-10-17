import React, { useRef } from 'react'
import { render } from '@testing-library/react'
import { configMocks, mockAnimationsApi } from 'jsdom-testing-mocks'
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import Marquee from './index'

configMocks({ afterAll, afterEach })

describe('react-marquease', () => {
  mockAnimationsApi()

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
    expect(getAllByText('Test')).toHaveLength(6)
  })
})
