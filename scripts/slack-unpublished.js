/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process')

const got = require('got')

const webhookUrl = process.env.SLACK_WEBHOOK

function isPublished() {
  try {
    execSync('npx lerna changed')
    return false
  } catch (e) {
    return (
      e.status === 1 &&
      e.output.toString().includes('No changed packages found')
    )
  }
}

function postToSlack() {
  /* eslint-disable @typescript-eslint/camelcase */
  const payload = {
    username: 'Lerna publish checker',
    channel: '#trustyle',
    text:
      '<!subteam^STY0UPVPC> master branch now has unpublished changes - please publish and merge ASAP!',
    link_names: 1,
    icon_emoji: ':scream_cat:'
  }

  got.post(webhookUrl, { json: payload })
}

if (isPublished()) {
  console.info('Everything published - aborting')
} else {
  console.info('Unpublished changes detected, posting to slack')
  postToSlack()
}
