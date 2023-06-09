const authFrame = document.getElementById('authFrame')

const TENANT_ID = '0eff1b6d-4d08-4084-b881-a393f1defa8d'
const CLIENT_ID = '7d8d6dfa-d7fd-4880-8ad7-4d4c4f286a47'
const EXTENSION_ID = 'bojcphdikjfnhkclejioaamnilakmbek'
const REDIRECT_URI = `https://${EXTENSION_ID}.chromiumapp.org/`

authFrame.src = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=id_token&redirect_uri=${REDIRECT_URI}&response_mode=fragment&scope=openid&nonce=678910`

window.addEventListener('message', (event) => {
  if (event.data) {
    console.log('event.data', event.data)
  }
}, false)