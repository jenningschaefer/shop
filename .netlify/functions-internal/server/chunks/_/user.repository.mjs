var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, key + "" , value);
/**
 * @file services/base.repository.ts
 * @description Base repository interfaces and abstract implementations
 * @author Jenning Schaefer
 * @license MIT
 */
class JsonRepository {
  constructor(initialData) {
    __publicField$1(this, "data");
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
    var _a;
    await this.simulateDelay();
    return (_a = this.data.find((item) => item.id === id)) != null ? _a : null;
  }
  async create(entity) {
    await this.simulateDelay();
    const newId = this.generateId();
    const newEntity = { ...entity, id: newId };
    this.data.push(newEntity);
    return newEntity;
  }
  async update(id, entity) {
    var _a;
    await this.simulateDelay();
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) return null;
    this.data[index] = { ...this.data[index], ...entity };
    return (_a = this.data[index]) != null ? _a : null;
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

const usersData = [
	{
		user_id: 0,
		role: "admin",
		title: "Mr",
		firstname: "Jenning",
		lastname: "Schaefer",
		mail: "mail@mail.de",
		birthday: "19871208",
		language: "DE",
		address_id_default: 0
	},
	{
		user_id: 1,
		role: "user",
		title: "Mr",
		firstname: "Jenning",
		lastname: "Schaefer",
		mail: "mail@mail.de",
		birthday: "19871208",
		language: "DE",
		address_id_default: 0
	}
];

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const _UserRepository = class _UserRepository extends JsonRepository {
  constructor() {
    const mappedData = usersData.map((user) => ({
      ...user,
      id: user.user_id
    }));
    super(mappedData);
  }
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!_UserRepository.instance) {
      _UserRepository.instance = new _UserRepository();
    }
    return _UserRepository.instance;
  }
  async findByEmail(email) {
    var _a;
    await this.simulateDelay();
    return (_a = this.data.find((user) => user.mail.toLowerCase() === email.toLowerCase())) != null ? _a : null;
  }
  /**
   * Override findById to use user_id field
   */
  async findById(id) {
    var _a;
    await this.simulateDelay();
    return (_a = this.data.find((user) => user.user_id === id)) != null ? _a : null;
  }
};
__publicField(_UserRepository, "instance", null);
let UserRepository = _UserRepository;

export { JsonRepository as J, UserRepository as U };
//# sourceMappingURL=user.repository.mjs.map
