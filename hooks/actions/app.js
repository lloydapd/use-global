// all actions here or create new actions and export it to index.js
const appActions = {
  increment: async (store) => {
    await store.setState({ counter: store.state.counter + 1 })
  },
  decrement: async (store) => {
    await store.setState({ counter: store.state.counter - 1 })
  }
}

export default appActions
