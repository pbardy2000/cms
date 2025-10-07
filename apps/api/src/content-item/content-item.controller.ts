import {
  CreateContentItem,
  GetContentItemsQueryParams,
  UpdateContentItem,
} from '@cms/common/dist/index.js';
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ContentItemService } from './content-item.service';

@Controller('content-items')
export class ContentItemController {
  private readonly logger = new Logger();

  constructor(private readonly contentItemService: ContentItemService) {}

  @Get(':id')
  async getContentItemById(@Param('id', ParseIntPipe) id: number) {
    return this.contentItemService.getContentItemById(id);
  }

  @Get()
  async getContentItems(@Query() queryParams: GetContentItemsQueryParams) {
    return this.contentItemService.getContentItems(queryParams);
  }

  @Post()
  async createContentItem(@Body() contentItem: CreateContentItem) {
    return this.contentItemService.createContentItem(contentItem);
  }

  @Patch(':id')
  async updateContentItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() contentItem: UpdateContentItem,
  ) {
    return this.contentItemService.updateContentItem(id, contentItem);
  }

  @Delete(':id')
  async deleteContentItem(@Param('id') id: number) {
    return this.contentItemService.deleteContentItem(id);
  }

  @Delete(':id/soft')
  async softDeleteContentItem(@Param('id') id: number) {
    return this.contentItemService.softDeleteContentItem(id);
  }
}
