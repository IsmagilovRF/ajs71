import getDescription from '../app';

const objWithDescription = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
  ],
};

const objWithoutDescription = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    { id: 9, name: 'Тройной выстрел', icon: 'http://...' },
  ],
};

test('Description from obj', () => {
  const expected = [{
    id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
  },
  ];
  const recieved = getDescription(objWithDescription);
  expect(recieved).toEqual(expected);
});

test('Default description', () => {
  const expected = [{
    id: 9, name: 'Тройной выстрел', icon: 'http://...', description: 'Описание недоступно',
  }];
  const recieved = getDescription(objWithoutDescription);
  expect(recieved).toEqual(expected);
});
