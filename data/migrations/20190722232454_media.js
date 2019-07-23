exports.up = function(knex) {
    return knex.schema.createTable('media', tbl => {
        //ID
        tbl.increments();

        //String Data
        tbl.string('name').notNullable();
        tbl.string('link').notNullable();
        tbl.string('icon').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('media');
};
