import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { ContentModelController } from './content-model.controller';
import { ContentModelProvider } from './content-model.provider';
import { ContentModelService } from './content-model.service';

@Module({
  imports: [DrizzleModule],
  controllers: [ContentModelController],
  providers: [ContentModelService, ContentModelProvider],
})
export class ContentModelModule {}
