import Validator from '../app';

test('Успешная валидация AL', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AL');
  expect(received).toBe(true);
});

test('Успешная валидация C3-PO', () => {
  const validator = new Validator();
  const received = validator.validateUsername('C3-PO');
  expect(received).toBe(true);
});

test('Успешная валидация AR4ANG3L', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AR4ANG3L');
  expect(received).toBe(true);
});

test('Начинается с цифры', () => {
  const validator = new Validator();
  const received = validator.validateUsername('7volt');
  expect(received).toBe(false);
});

test('Заканчивается цифрой', () => {
  const validator = new Validator();
  const received = validator.validateUsername('T800');
  expect(received).toBe(false);
});

test('Более трех цифр подряд', () => {
  const validator = new Validator();
  const received = validator.validateUsername('T1000-th');
  expect(received).toBe(false);
});

test('Кириллица', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Угнетатель');
  expect(received).toBe(false);
});

test('Начинается с тире', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-Grut');
  expect(received).toBe(false);
});

test('Заканчивается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('tortuga_');
  expect(received).toBe(false);
});
