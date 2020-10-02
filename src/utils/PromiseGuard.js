export default class PromiseGuard {
  #lastPromise;

  getPromise(promise) {
    this.#lastPromise = promise;
    return this.#lastPromise.then(this._preventRaceCondition());
  }

  _preventRaceCondition() {
    const currentPromise = this.#lastPromise;
    return (response) => {
      if (this.#lastPromise === currentPromise) {
        return response;
      }
      return new Promise(() => null);
    };
  }
}
