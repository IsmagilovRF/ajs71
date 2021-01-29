// TODO: write your code here
export default class Validator {
  validateUsername(name) {
    this.name = name;
    return /^[a-z\d_-]+$/i.test(name)
      && !/[\d]{4,}/.test(name)
      && !/^[\d_-]/.test(name)
      && !/[\d_-]$/.test(name);
  }
}
