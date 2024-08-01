// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import FooterComp from './FooterComp'

const meta: Meta<typeof FooterComp> = {
  component: FooterComp,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FooterComp>

export const Primary: Story = {}
