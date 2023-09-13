import { faker } from '@faker-js/faker';

const randomName = faker.person.fullName();
const randomGenre = faker.music.genre();
console.log("doesthiswork>>>>>", randomName, randomGenre);


