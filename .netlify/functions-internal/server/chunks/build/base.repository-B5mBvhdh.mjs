class JsonRepository {
  data;
  constructor(initialData) {
    this.data = JSON.parse(JSON.stringify(initialData));
  }
  /**
   * Synchronous data access for backwards compatibility
   * Use async methods for proper API simulation
   */
  getData() {
    return this.data;
  }
  /**
   * Simulate network latency for realistic API behavior
   */
  async simulateDelay(ms = 50) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async findAll() {
    await this.simulateDelay();
    return [...this.data];
  }
  async findById(id) {
    await this.simulateDelay();
    return this.data.find((item) => item.id === id) ?? null;
  }
  async create(entity) {
    await this.simulateDelay();
    const newId = this.generateId();
    const newEntity = { ...entity, id: newId };
    this.data.push(newEntity);
    return newEntity;
  }
  async update(id, entity) {
    await this.simulateDelay();
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) return null;
    this.data[index] = { ...this.data[index], ...entity };
    return this.data[index] ?? null;
  }
  async delete(id) {
    await this.simulateDelay();
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) return false;
    this.data.splice(index, 1);
    return true;
  }
  /**
   * Generate next ID - override for custom ID strategies
   */
  generateId() {
    if (this.data.length === 0) return 1;
    const maxId = Math.max(...this.data.map((item) => item.id));
    return maxId + 1;
  }
}

export { JsonRepository as J };
//# sourceMappingURL=base.repository-B5mBvhdh.mjs.map
