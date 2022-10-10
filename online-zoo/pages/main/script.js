const arr = [
  {
    name: 'GIANT PANDAS',
    location: 'Native to Southwest China',
    img: 'Rectangle 1',
    meat: false,
    vegan: true,
  },
  {
    name: 'EAGLES',
    location: 'Native to South America',
    img: 'Rectangle 2',
    meat: true,
    vegan: false,
  },
  {
    name: 'GORILLAS',
    location: 'Native to Congo',
    img: 'Rectangle 3',
    meat: false,
    vegan: true,
  },
  {
    name: 'TWO-TOED SLOTH',
    location: 'Mesoamerica, South America',
    img: 'Rectangle 4',
    meat: false,
    vegan: true,
  },
  {
    name: 'CHEETAHS',
    location: 'Native to Africa',
    img: 'Rectangle 5',
    meat: true,
    vegan: false,
  },
  {
    name: 'PENGUINS',
    location: 'Native to Antarctica',
    img: 'Rectangle 6',
    meat: true,
    vegan: false,
  },
  {
    name: 'Two-toed Sloth',
    location: 'Mesoamerica, South America',
    img: 'Rectangle 7',
    meat: false,
    vegan: true,
  },
  {
    name: 'Gorillas',
    location: 'Native to Congo',
    img: 'Rectangle 8',
    meat: false,
    vegan: true,
  },
];

const getShuffledArr = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};
