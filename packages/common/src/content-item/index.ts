import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";
import { PageParams } from "../page/index.js";

export class ContentItem {
  @IsNumber()
  id!: number;

  @IsString()
  key!: string;

  @IsString()
  contentType!: string;

  @IsNumber()
  contentModelId!: number;

  @ValidateIf((o) => o.releaseId !== null)
  @IsNumber()
  releaseId!: number | null;

  @IsDateString()
  createdAt!: string;

  @ValidateIf((o) => o.updatedAt !== null)
  @IsDateString()
  updatedAt!: string | null;

  @ValidateIf((o) => o.deletedAt !== null)
  @IsDateString()
  deletedAt!: string | null;

  @ValidateIf((o) => o.publishAt !== null)
  @IsDateString()
  publishAt!: string | null;

  @IsObject()
  data!: Record<string, unknown>;
}

export class CreateContentItem {
  @IsString()
  key!: string;

  @IsString()
  contentType!: string;

  @IsNumber()
  contentModelId!: number;

  @ValidateIf((o) => o.releaseId !== null)
  @IsNumber()
  releaseId!: number | null;

  @ValidateIf((o) => o.publishAt !== null)
  @IsDateString()
  publishAt!: string | null;

  @IsObject()
  data!: Record<string, unknown>;
}

export class UpdateContentItem {
  @IsNumber()
  id!: number;

  @IsOptional()
  @IsString()
  key?: string;

  @IsOptional()
  @ValidateIf((o) => o.releaseId !== null)
  @IsNumber()
  releaseId?: number | null;

  @IsOptional()
  @ValidateIf((o) => o.publishAt !== null)
  @IsDateString()
  publishAt?: string | null;

  @IsOptional()
  @IsObject()
  data?: Record<string, unknown>;
}

export class GetContentItemsQueryParams extends PageParams {
  @IsOptional()
  @IsString()
  key?: string;

  @IsOptional()
  @IsNumber()
  contentModelId?: number;

  @IsOptional()
  @IsString()
  contentType?: string;

  @ValidateIf((o) => o.contentType)
  @IsNumber()
  version?: number;

  @IsOptional()
  @IsNumber()
  releaseId?: number;

  @IsOptional()
  @IsBoolean()
  includeDeleted?: boolean;
}
