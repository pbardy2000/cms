import { GetReleasesQueryParams, Release } from '@cms/common/dist/index.js';
import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ReleaseService } from './release.service';

@Controller('releases')
export class ReleaseController {
  constructor(private readonly releaseService: ReleaseService) {}

  @Get(':id')
  async getReleaseById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Release> {
    return await this.releaseService.getReleaseById(id);
  }

  @Get()
  async getReleases(
    @Query() queryParams: GetReleasesQueryParams,
  ): Promise<Release[]> {
    return await this.releaseService.getReleases(queryParams);
  }

  @Post()
  async createRelease(@Query() release: Release): Promise<Release> {
    return await this.releaseService.createRelease(release);
  }

  @Patch(':id')
  async updateRelease(
    @Param('id', ParseIntPipe) id: number,
    @Query() release: Release,
  ): Promise<Release> {
    return await this.releaseService.updateRelease(id, release);
  }

  @Delete(':id/soft-delete')
  async softDeleteRelease(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Release> {
    return await this.releaseService.softDeleteRelease(id);
  }

  @Delete(':id')
  async deleteRelease(@Param('id', ParseIntPipe) id: number): Promise<Release> {
    return await this.releaseService.deleteRelease(id);
  }
}
