exports.up = function(knex) {
    return knex.schema.createTable('skills', tbl => {
        //ID
        tbl.increments();

        //String Data
        tbl.string('label').notNullable();
        tbl.string('name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('skills');
};
