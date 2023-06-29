import knex from 'knex';

const crdb = knex({
  client: 'cockroachdb',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public'],
});

export default crdb;
