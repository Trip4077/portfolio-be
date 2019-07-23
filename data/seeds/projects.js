exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Textflix',
          synopsis: 'An SMS Text Reminder App for Scheduling movie viewings',
          ghLink: 'https://github.com/Trip4077?tab=projects',
          liveAt: 'https://heuristic-swirles-5d0a2b.netlify.com/',
          stack: 'HTML, Materialize, React, Redux, Node, Express, Nexmo, SQLite3, Jest',
          image: ''
        }
      ]);
    });
};