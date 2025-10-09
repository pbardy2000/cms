import {
  CreateContentModel,
  GetContentModelsQueryParams,
  UpdateContentModel,
} from '@cms/common/dist/index.js';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ContentModelService } from './content-model.service';

@Controller('content-models')
export class ContentModelController {
  constructor(private readonly contentModelService: ContentModelService) {}

  @Get(':id')
  async getContentModel(@Param('id') id: string) {
    return this.contentModelService.getContentModel(id);
  }

  @Get()
  async getContentModels(@Query() queryParams: GetContentModelsQueryParams) {
    return this.contentModelService.getContentModels(queryParams);
  }

  @Post()
  async createContentModel(@Body() contentModel: CreateContentModel) {
    return this.contentModelService.createContentModel(contentModel);
  }

  @Patch(':id')
  async updateContentModel(
    @Param('id') id: string,
    @Body() contentModel: UpdateContentModel,
  ) {
    return this.contentModelService.updateContentModel(id, contentModel);
  }

  @Delete(':id/soft')
  async softDeleteContentModel(@Param('id') id: string) {
    return this.contentModelService.softDeleteContentModel(id);
  }

  @Delete(':id')
  async deleteContentModel(@Param('id') id: string) {
    return this.contentModelService.deleteContentModel(id);
  }
}
