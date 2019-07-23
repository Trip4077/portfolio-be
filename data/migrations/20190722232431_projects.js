exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        //ID
        tbl.increments();

        //String Data
        tbl.string('name').notNullable().unique();
        tbl.string('synopsis').notNullable();
        tbl.string('ghLink').notNullable();
        tbl.string('liveAt').unique();
        tbl.string('stack').notNullable();
        tbl.string('image').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfEcists('projects');
};
