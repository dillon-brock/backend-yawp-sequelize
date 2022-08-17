'use strict';

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('movies', [
      {
        title: 'Inside',
        description: 'Musical comedy starring Bo Burnham',
        releaseYear: 2021,
        genre_id: 1,
        image:
          'https://upload.wikimedia.org/wikipedia/en/e/e1/Bo_Burnham_-_Inside.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Indiana Jones: Raiders of the Lost Ark',
        description:
          'white guy with whip running around the desert looking for historical artifacts',
        releaseYear: 1981,
        image:
          'https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg',
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'It',
        description:
          'demonic clown lives in the sewer and preys on your personal fears every 27 years',
        releaseYear: 2017,
        image:
          'https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg',
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Spencer',
        description: 'Historical drama about Princess Diana',
        releaseYear: 2021,
        genre_id: 4,
        image:
          'https://upload.wikimedia.org/wikipedia/en/e/ea/Spencer_%28film%29.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Free Solo',
        description:
          'Rock climber on his quest to perform a free solo climb of El Capitan in Yosemite National Park in June 2017',
        releaseYear: 2018,
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Free_Solo.png',
        genre_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
