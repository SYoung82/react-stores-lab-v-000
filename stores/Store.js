class Store {
  constructor(state) {
    this.state = state;
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter( l => listener !== l)
    }
    return removeListener;
  }

  setState(state) {
    this.state = state;
    for(let listener of this.listeners) {
      listener.call(this, state);
    }
  }

  getState() {
    return this.state;
  }
}

module.exports = Store;
