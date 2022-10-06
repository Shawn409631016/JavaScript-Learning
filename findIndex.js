const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal==='elephant';
});
console.log(foundAnimal);
console.log(animals[foundAnimal]);

const startsWithS = animals.findIndex(S =>{
  return S[0] === 's';
});
console.log(startsWithS);
console.log(animals[startsWithS]);