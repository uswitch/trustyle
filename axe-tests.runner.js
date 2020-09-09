import path from 'path'
import fs from 'fs'

import initStoryshots from '@storybook/addon-storyshots'
import { axeTest } from '@storybook/addon-storyshots-puppeteer'
import { logger } from '@storybook/node-logger'

const getStorybookUrl = () => {
  if (process.env.USE_DEV_SERVER) {
    return 'http://localhost:6006'
  }

  const pathToStorybookStatic = path.join(__dirname, 'storybook-static')
  if (!fs.existsSync(pathToStorybookStatic)) {
    logger.error(
      'You are running puppeteer tests without having the static build of storybook. Please run "npm run build-storybook" before running tests.'
    )
    return null
  }
  return `file://${pathToStorybookStatic}`
}

const BROKEN_STORIES = [
  'Compounds/Carousel',
  'Compounds/HeroCard',
  'Compounds/InteractiveTabs',
  'Compounds/Sponsored Product Rate Table',
  'Compounds/Sponsored product',
  'Compounds/Testimonial Card',
  'Elements/Accordion',
  'Elements/Author',
  'Elements/Breadcrumbs',
  'Elements/Button Link',
  'Elements/Button',
  'Elements/Call Out',
  'Elements/Card',
  'Elements/Category',
  'Elements/Drawer',
  'Elements/Embedded-video',
  'Elements/Hero',
  'Elements/HeroWithBackgroundImage',
  'Elements/Link List',
  'Elements/Pagination',
  'Elements/Simple Input',
  'Elements/Slide Reveal',
  'Elements/Text Input',
  'Global Styles/Typography',
  'Layout/Arrangement',
  'Layout/Flex Grid',
  'Layout/Grid',
  'Legacy Styles/Typography'
]

const storyKindRegex = new RegExp(`^(?!^(${BROKEN_STORIES.join('|')})$).*$`)

const storybookUrl = getStorybookUrl()
if (storybookUrl != null) {
  initStoryshots({
    suite: 'A11y checks',
    storyKindRegex,
    framework: 'react',
    test: axeTest({ storybookUrl })
  })
}
