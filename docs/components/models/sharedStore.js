const localStorageKey = 'vuesite-sharedStore-state'
const { localStorage } = window

const store = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessage (message) {
    this.message = message
    this.updateLocalStorage()
  },
  updateLocalStorage () {
    const { state } = this
    localStorage.setItem(localStorageKey, JSON.stringify(state))
  },
  readFromLocalStorage () {
    try {
      const localState = JSON.parse(localStorage.getItem(localStorageKey))
      Object.assign(this.state, localState)
      console.log('[jCard Store] Loaded values:', this.state)
    } catch (ex) {
      // ignore error
    }
  }
}

store.readFromLocalStorage()

export default store
