import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/mysql2';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const connectionString = configService.get<string>('DATABASE_URL');
      return drizzle(connectionString);
    },
  },
];
