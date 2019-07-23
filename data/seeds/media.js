exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('media').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('media').insert([
        {
          id: 1, 
          name: 'Twitter',
          link: 'https://twitter.com/Bernard88313685',
          icon: 'N/A'
        }
      ]);
    });
};