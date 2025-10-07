import type {
  CreateRelease,
  GetReleasesQueryParams,
  Release,
  UpdateRelease,
} from '@cms/common';
import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ReleaseProvider } from './release.provider';

@Injectable()
export class ReleaseService {
  private readonly logger = new Logger();

  constructor(private readonly releaseProvider: ReleaseProvider) {}

  async getReleaseById(id: number): Promise<Release> {
    this.logger.log(`Calling getReleaseById`);
    this.logger.log(JSON.stringify(id));

    const item = await this.releaseProvider.getReleaseById(id);
    if (!item) {
      this.logger.log('No release found');
      this.logger.log(JSON.stringify(item));

      throw new NotFoundException();
    }

    return item;
  }

  async getReleases(queryParams: GetReleasesQueryParams): Promise<Release[]> {
    this.logger.log(`Calling getReleases`);
    this.logger.log(JSON.stringify(queryParams));

    return await this.releaseProvider.getReleases(queryParams);
  }

  async createRelease(release: CreateRelease): Promise<Release> {
    this.logger.log(`Calling createRelease`);
    this.logger.log(JSON.stringify(release));

    // Attempt to find a release with the same key and id, if so throw a conflict error
    const existingReleases = await this.releaseProvider.getReleases({
      name: release.name,
      limit: 1,
    });

    if (existingReleases.length > 0) {
      this.logger.log(`Found existing releases`);
      this.logger.log(JSON.stringify(existingReleases));

      throw new ConflictException();
    }

    return await this.releaseProvider.createRelease(release);
  }

  async updateRelease(id: number, release: UpdateRelease): Promise<Release> {
    this.logger.log(`Calling updateRelease`);
    this.logger.log(JSON.stringify(id));
    this.logger.log(JSON.stringify(release));

    // Attempt to find the release using the id
    const existingRelease = await this.releaseProvider.getReleaseById(id);
    if (!existingRelease) {
      this.logger.log('No release found');
      this.logger.log(JSON.stringify(existingRelease));

      throw new NotFoundException();
    }

    // TODO: in future clone the existing release and save as an audit release

    return await this.releaseProvider.updateRelease(id, release);
  }

  async softDeleteRelease(id: number): Promise<Release> {
    this.logger.log(`Calling softDeleteRelease`);
    this.logger.log(JSON.stringify(id));

    // Attempt to find the release using the id
    const existingRelease = await this.releaseProvider.getReleaseById(id);
    if (!existingRelease) {
      this.logger.log('No release found');
      this.logger.log(JSON.stringify(existingRelease));

      throw new NotFoundException();
    }

    return await this.releaseProvider.softDeleteRelease(id);
  }

  async deleteRelease(id: number): Promise<Release> {
    this.logger.log(`Calling deleteRelease`);
    this.logger.log(JSON.stringify(id));

    // Attempt to find the release using the id
    const existingRelease = await this.releaseProvider.getReleaseById(id);
    if (!existingRelease) {
      this.logger.log('No release found');
      this.logger.log(JSON.stringify(existingRelease));

      throw new NotFoundException();
    }

    return await this.releaseProvider.deleteRelease(id);
  }
}
