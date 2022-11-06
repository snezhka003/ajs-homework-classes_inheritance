import Character from '../character';

test('test class Character with valid values of property', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('test class Character with invalid values of properties', () => {
  expect(() => {
    const character = new Character('volandemort', 'Magic', 40, 20);
    return character;
  }).toThrow(new Error('Type not found')); // можно также написать просто Error вместо new Error('Type not found')
});

test('test class Character with invalid value of name', () => {
  expect(() => {
    const character = new Character('volandemort', 'Daemon', 40, 20);
    return character;
  }).toThrow(Error);
});

test('test class Character with invalid value of type', () => {
  expect(() => {
    const character = new Character('voland', 'Pacman', 40, 20);
    return character;
  }).toThrow(Error);
});
