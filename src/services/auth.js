export function basicSignIn(name) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve({
        user: {
          name,
        },
      })
    }, 2000)
  )
}
