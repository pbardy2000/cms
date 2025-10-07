import { Module } from '@nestjs/common';
import { ContentItemModule } from './content-item/content-item.module';
import { ContentModelModule } from './content-model/content-model.module';
import { ReleaseModule } from './release/release.module';

@Module({
  imports: [ContentItemModule, ContentModelModule, ReleaseModule],
})
export class AppModule {}
