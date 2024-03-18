export const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/
  if (re.test(email)) return true

  return false
}

export const validatePassword = (password: string) => {
  const characters = 6

  if (password.length > characters) return true

  return false
}

export const validateUsername = (username: string) => {
  const characters = 3
  if (username.length > characters && username.length < 10) return true

  return false
}

export const validateLogin = (
  email: string,
  password: string,
  username: string,
): boolean => {
  const validateFields =
    validateEmail(email) &&
    validatePassword(password) &&
    validateUsername(username)

  return validateFields
}
