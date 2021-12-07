import { createLogger, format, transports } from 'winston';
import path from 'path';

const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.File({ filename: path.resolve(__dirname, 'log', 'info.log') }),
  ],
});

export { logger };
