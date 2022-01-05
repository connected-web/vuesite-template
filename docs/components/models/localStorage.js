function createLocalStorage () {
  const LocalStorage = require('node-localstorage').LocalStorage
  const localStorage = new LocalStorage('./localStorage.dat')
  return localStorage
}

module.exports = (typeof window !== 'undefined') ? window.localStorage : createLocalStorage()
