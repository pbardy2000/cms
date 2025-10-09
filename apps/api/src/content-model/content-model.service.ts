import type {
  ContentModel,
  CreateContentModel,
  GetContentModelsQueryParams,
  UpdateContentModel,
} from '@cms/common';
import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ContentModelProvider } from './content-model.provider';

@Injectable()
export class ContentModelService {
  private readonly logger = new Logger();

  constructor(private readonly contentModelProvider: ContentModelProvider) {}

  async getContentModel(id: string): Promise<ContentModel> {
    this.logger.log(`Calling getContentModel`);
    this.logger.log(JSON.stringify(id));

    const item = await this.contentModelProvider.getContentModelById(id);
    if (!item) {
      this.logger.log('No content model found');
      this.logger.log(JSON.stringify(item));

      throw new NotFoundException();
    }

    return item;
  }

  async getContentModels(
    queryParams: GetContentModelsQueryParams,
  ): Promise<ContentModel[]> {
    this.logger.log(`Calling getContentModels`);
    this.logger.log(JSON.stringify(queryParams));

    return await this.contentModelProvider.getContentModels(queryParams);
  }

  async createContentModel(
    contentModel: CreateContentModel,
  ): Promise<ContentModel> {
    this.logger.log(`Calling createContentModel`);
    this.logger.log(JSON.stringify(contentModel));

    // Attempt to find a content model with the same key and id, if so throw a conflict error
    const existingModels = await this.contentModelProvider.getContentModels({
      type: contentModel.type,
      limit: 1,
    });

    if (existingModels.length > 0) {
      this.logger.log(`Found existing content models`);
      this.logger.log(JSON.stringify(existingModels));
      throw new ConflictException();
    }

    return await this.contentModelProvider.createContentModel(contentModel);
  }

  async updateContentModel(
    id: string,
    contentModel: UpdateContentModel,
  ): Promise<ContentModel> {
    this.logger.log(`Calling updateContentModel`);
    this.logger.log(JSON.stringify(id));
    this.logger.log(JSON.stringify(contentModel));

    // Attempt to find the content model using the id
    const existingModel = await this.contentModelProvider.getContentModelById(
      id,
    );
    if (!existingModel) {
      this.logger.log('No content model found');
      this.logger.log(JSON.stringify(existingModel));

      throw new NotFoundException();
    }

    // TODO: in future clone the existing model and save as an audit model

    return await this.contentModelProvider.updateContentModel(id, contentModel);
  }

  async softDeleteContentModel(id: string): Promise<ContentModel> {
    this.logger.log(`Calling softDeleteContentModel`);
    this.logger.log(JSON.stringify(id));

    // Attempt to find the content model using the id
    const existingModel = await this.contentModelProvider.getContentModelById(
      id,
    );
    if (!existingModel) {
      this.logger.log('No content model found');
      this.logger.log(JSON.stringify(existingModel));

      throw new NotFoundException();
    }

    return await this.contentModelProvider.softDeleteContentModel(id);
  }

  async deleteContentModel(id: string): Promise<ContentModel> {
    this.logger.log(`Calling deleteContentModel`);
    this.logger.log(JSON.stringify(id));

    // Attempt to find the content model using the id
    const existingModel = await this.contentModelProvider.getContentModelById(
      id,
    );
    if (!existingModel) {
      this.logger.log('No content model found');
      this.logger.log(JSON.stringify(existingModel));

      throw new NotFoundException();
    }

    return await this.contentModelProvider.deleteContentModel(id);
  }
}
