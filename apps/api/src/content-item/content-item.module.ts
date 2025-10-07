import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { ContentItemController } from './content-item.controller';
import { ContentItemProvider } from './content-item.provider';
import { ContentItemService } from './content-item.service';

@Module({
  imports: [DrizzleModule],
  controllers: [ContentItemController],
  providers: [ContentItemService, ContentItemProvider],
})
export class ContentItemModule {}
