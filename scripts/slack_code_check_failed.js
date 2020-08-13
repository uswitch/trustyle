/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process')

const got = require('got')
const fs = require('fs')

const webhookUrl = process.env.SLACK_WEBHOOK

function postToSlack(codeCheckOutput) {
  /* eslint-disable @typescript-eslint/camelcase */
  const payload = {
    username: 'Trustyle code checks',
    channel: '#trustyle',
    text: 'Some code checks failed',
    blocks: [
      {
	"type": "section",
	"text": {
	  "type": "mrkdwn",
	  "text": "Some code checks failed on drone"
	},
	"fields": [
	  {
	    "type": "mrkdwn",
	    "text": "*Branch*"
	  },
	  {
	    "type": "mrkdwn",
	    "text": process.env.DRONE_BRANCH
	  },
	  {
	    "type": "mrkdwn",
	    "text": "*Author*"
	  },
	  {
	    "type": "mrkdwn",
	    "text": process.env.DRONE_COMMIT_AUTHOR
	  }
	]
      },
      {
	"type": "divider"
      },
      {
	"type": "header",
	"text": {
	  "type": "plain_text",
	  "text": "Code Check Output"
	}
      },
      {
	"type": "section",
	"text": {
	  "type": "plain_text",
	  "text": codeCheckOutput
	}
      }
    ],
    link_names: 1,
    icon_emoji: ':chestnut:'
  }
  got.post(webhookUrl, { json: payload })
}

fs.readFile('./code_check_logs.log', 'utf8', (err, data) => {
  if (err) {
    console.info('Unable to load code check logs')
    return
  }
  console.info('Code check errors found - publishing to slack')
  postToSlack(data)
})
