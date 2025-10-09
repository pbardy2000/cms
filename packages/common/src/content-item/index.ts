import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
} from "class-validator";
import { PageParams } from "../page/index.js";

export class ContentItem {
  @IsUUID()
  id!: string;

  @IsString()
  key!: string;

  @IsString()
  contentType!: string;

  @IsUUID()
  contentModelId!: string;

  @ValidateIf((o) => o.releaseId !== null)
  @IsUUID()
  releaseId!: string | null;

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

  @IsUUID()
  contentModelId!: string;

  @ValidateIf((o) => o.releaseId !== null)
  @IsUUID()
  releaseId!: string | null;

  @ValidateIf((o) => o.publishAt !== null)
  @IsDateString()
  publishAt!: string | null;

  @IsObject()
  data!: Record<string, unknown>;
}

export class UpdateContentItem {
  @IsUUID()
  id!: string;

  @IsOptional()
  @IsString()
  key?: string;

  @IsOptional()
  @ValidateIf((o) => o.releaseId !== null)
  @IsUUID()
  releaseId?: string | null;

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
  @IsUUID()
  contentModelId?: string;

  @IsOptional()
  @IsString()
  contentType?: string;

  @ValidateIf((o) => o.contentType)
  @IsNumber()
  version?: number;

  @IsOptional()
  @IsUUID()
  releaseId?: string;

  @IsOptional()
  @IsBoolean()
  includeDeleted?: boolean;
}
