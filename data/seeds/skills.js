
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('skills').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {
          id: 1, 
          label: 'Backend',
          name: 'Node'
        }
      ]);
    });
};
