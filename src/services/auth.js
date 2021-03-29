export function googleSignIn() {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve({
        token: 'fdkluhfkishufiluhfuishfnslkjcmw',
        user: {
          name: 'Anderson',
          email: 'anderson@email.com',
        },
      })
    }, 2000)
  )
}
