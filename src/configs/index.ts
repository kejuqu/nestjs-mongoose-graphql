import querystring from 'querystring';
import 'dotenv/config';

const configs = {
  port: parseInt(process.env.PORT, 10) || 8081,
  database: {
    protocol: process.env.DB_PROTOCOL || 'mongodb',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT, 10) || 27017,
    name: process.env.DB_NAME || 'test',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

export default () => configs;

export const getMongoConnectURI = (
  options?: Record<string, string | number>,
) => {
  const { database } = configs;
  const { protocol, host, port, name, user, password } = database;

  const credentials = user && password ? `${user}:${password}@` : '';

  const connectionOptionsStr = options
    ? `/?${querystring.stringify(options)}`
    : '';

  // reference: https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/
  const connectURI = `${protocol}://${credentials}${host}:${port}/${name}${connectionOptionsStr}`;

  console.info(`mongodb connect at: ${connectURI} ✨✨`);
  return connectURI;
};
