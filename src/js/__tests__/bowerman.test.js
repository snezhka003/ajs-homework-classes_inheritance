import Bowerman from '../bowerman';

test('test class Bowerman with valid value of name', () => {
  const bowerman = new Bowerman('bowerman');
  const expected = {
    name: 'bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(expected);
});

test('test class Bowerman with invalid values of properties', () => {
  expect(() => {
    const bowerman = new Bowerman('volandemort', 'Magic');
    return bowerman;
  }).toThrow(Error);
});

test('test class Bowerman with invalid value of name', () => {
  expect(() => {
    const bowerman = new Bowerman('volandemort');
    return bowerman;
  }).toThrow(Error);
});

test('test class Bowerman with invalid value of type', () => {
  expect(() => {
    const bowerman = new Bowerman('bowerman', 'Pacman');
    return bowerman;
  }).toThrow(Error);
});

// мне кажется, что в данном случае тесты на проверку ошибки
// при невалидном значении типа и при невалидных значениях имени и типа одновременно - избыточны,
// т.к. в самом классе прописано конкретное значение типа