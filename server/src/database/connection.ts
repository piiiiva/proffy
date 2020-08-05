import knex from 'knex';
import Knex from 'knex';
import path from 'path'; // Facilitar navegação entre as pastas e deixar padrão;

const db = Knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default db;