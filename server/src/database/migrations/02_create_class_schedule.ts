import Knex from 'knex';

// Quais alterações vamos realizar no banco
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();


    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

// Se deu errado o que vamos fazer
export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
};