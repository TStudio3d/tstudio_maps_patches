/**
 * Posts this repo's go-live card to the shared Discord release channel.
 *
 * It is the card TStudio3d/cfx-portal-upload posts for the map repos, because
 * the service bot's "Post to #changelog" button reads everything off it: the
 * title "<repo> v<version>", the footer "<owner>/<repo>", the "Version" field
 * and the notes after the first blank line of the description. There is no
 * "Asset" field — the patches are not a portal asset — so the bot resolves the
 * product from the repo name instead.
 */
const {
  DISCORD_WEBHOOK_URL: webhook,
  GH_TOKEN: token,
  TAG: tag,
  GITHUB_REPOSITORY: repo,
  GITHUB_API_URL: api = 'https://api.github.com'
} = process.env

if (!webhook) fail('The DISCORD_WEBHOOK_URL secret is not set on this repo.')
if (!tag) fail('No release tag to post a card for.')

const response = await fetch(`${api}/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`, {
  headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json' }
})
if (!response.ok) fail(`Release ${tag} not found (${response.status}).`)
const release = await response.json()

const name = repo.split('/').pop()
const version = tag.replace(/^v/i, '')

// Discord embed limits: title 256, description 4096.
const status = 'This version is now live on GitHub.'
const notes = (release.body ?? '').trim()
let description = notes ? `${status}\n\n${notes}` : status
if (description.length > 4000) description = `${description.slice(0, 4000)}\n…`

const embed = {
  title: `${name} v${version}`.slice(0, 256),
  url: release.html_url,
  description,
  color: 0x57f287,
  fields: [
    { name: 'Status', value: '🟢 Live', inline: true },
    { name: 'Version', value: `v${version}`, inline: true }
  ],
  footer: { text: repo },
  timestamp: new Date().toISOString()
}

// Discord hands a button's clicks to the application that owns the webhook and
// refuses the button on one made in the channel settings, so ask the webhook
// who owns it first, and if Discord still says no, post the card without it.
const components = [
  {
    type: 1,
    components: [
      { type: 2, style: 1, label: 'Post to #changelog', custom_id: 'changelog:post', emoji: { name: '📣' } }
    ]
  }
]

let owned = false
try {
  const info = await fetch(webhook)
  owned = info.ok && Boolean((await info.json()).application_id)
} catch {}
if (!owned) console.log('::warning::The Discord webhook is not application-owned; the card has no changelog button.')

const sep = webhook.includes('?') ? '&' : '?'
const withButton = owned && (await post(`${webhook}${sep}with_components=true`, { embeds: [embed], components }, true))
if (!withButton) await post(webhook, { embeds: [embed] })
console.log(`Posted the ${name} v${version} card${withButton ? ' with the changelog button' : ''}.`)

async function post(url, body, softOn400) {
  const answer = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  if (answer.ok) return true
  if (softOn400 && answer.status === 400) {
    console.log('::warning::Discord refused the changelog button (400); posting the card without it.')
    return false
  }
  fail(`Discord answered ${answer.status}: ${(await answer.text()).slice(0, 300)}`)
}

function fail(message) {
  console.log(`::error::${message}`)
  process.exit(1)
}
