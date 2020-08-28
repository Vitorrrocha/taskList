import DATABASE_PASS from './env';

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: DATABASE_PASS,
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
