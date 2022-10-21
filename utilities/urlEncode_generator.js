// generate random password
function urlEncode (length) {
  let reurlCode = ''
  let collection = []
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const lowerCaseLetters = alphabet.split('')
  const upperCaseLetters = alphabet.toUpperCase().split('')
  const numbers = '0123456789'.split('')

  collection = collection.concat(lowerCaseLetters, upperCaseLetters, numbers)

  for (let i = 1; i <= length; i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    reurlCode += collection[randomIndex]
  }

  return reurlCode
}

module.exports = { urlEncode }
