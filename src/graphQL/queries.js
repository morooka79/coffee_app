export const getDrinkers = `
  query getDrinkers {
    getDrinkers
  }`;

  export const registerAsDrinker = `
  query registerAsDrinker($name: String) {
    registerAsDrinker(name:$name) {
      resultCode
      resultMessage
    }
  }`;