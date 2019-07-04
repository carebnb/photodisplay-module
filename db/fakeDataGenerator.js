const faker = require('faker');
const fs = require('fs');

const createFakeData = () => {
  const fakeDataArray = [];

  for (let i = 1; i < 697; i += 1) {
    const j = Math.ceil(Math.random() * 41);
    console.log(j);
    fakeDataArray.push([
      `./webPhotos/photo-${Math.floor(Math.random() * 42)}.webp`,
      faker.lorem.sentence(),
      faker.random.boolean(),
      Math.ceil((i % 101) + 1),
    ]);
  }
  return fakeDataArray;
};

const writeDataToFile = (array) => {
  fs.writeFileSync('localFakeData.txt', array[0].toString(), (err) => {
    if (err) {
      throw err;
    }
  });

  for (let i = 1; i <= array.length - 1; i += 1) {
    const fakeStr = array[i].toString();
    fs.appendFile('localFakeData.txt', `\n${fakeStr}`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

const dataToWrite = createFakeData();
writeDataToFile(dataToWrite);
