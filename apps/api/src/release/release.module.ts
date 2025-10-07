import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { ReleaseController } from './release.controller';
import { ReleaseProvider } from './release.provider';
import { ReleaseService } from './release.service';

@Module({
  imports: [DrizzleModule],
  controllers: [ReleaseController],
  providers: [ReleaseService, ReleaseProvider],
})
export class ReleaseModule {}
