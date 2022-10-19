// generate random password
function urlEncode (length) {
  let reurlCode = ''
  let collection = []

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const upperCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  const numbers = '0123456789'.split('')

  collection = collection.concat(lowerCaseLetters).concat(upperCaseLetters).concat(numbers)

  for (let i = 1; i <= length; i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    reurlCode += collection[randomIndex]
  }

  return reurlCode
}

module.exports = { urlEncode }
