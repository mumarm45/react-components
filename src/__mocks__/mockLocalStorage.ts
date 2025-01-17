class LocalStorageMock {
  store: { [k: string]: string };
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  key = (idx: number): string => {
    const values = Object.values(this.store);
    return values[idx];
  };

  clear = () => {
    this.store = {};
  };

  getItem = (key: string) => this.store[key] || null;

  setItem = (key: string, value: string) =>
    (this.store[key] = typeof value === 'object' ? JSON.stringify(value) : value.toString());

  removeItem = (key: string) => {
    delete this.store[key];
  };
}

export default LocalStorageMock;
