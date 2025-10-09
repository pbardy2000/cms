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

export class ContentModel {
  @IsUUID()
  id!: string;

  @IsString()
  type!: string;

  @ValidateIf((o) => o.description !== null)
  @IsString()
  description!: string | null;

  @IsNumber()
  version!: number;

  @IsDateString()
  createdAt!: string;

  @ValidateIf((o) => o.updatedAt !== null)
  @IsDateString()
  updatedAt!: string | null;

  @ValidateIf((o) => o.deletedAt !== null)
  @IsDateString()
  deletedAt!: string | null;

  @IsObject()
  data!: Record<string, unknown>;
}

export class CreateContentModel {
  @IsString()
  type!: string;

  @ValidateIf((o) => o.description !== null)
  @IsString()
  description!: string | null;

  @IsObject()
  data!: Record<string, unknown>;
}

export class UpdateContentModel {
  @IsUUID()
  id!: string;

  @IsOptional()
  @ValidateIf((o) => o.description !== null)
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsObject()
  data?: Record<string, unknown>;
}

export class GetContentModelsQueryParams extends PageParams {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsBoolean()
  includeDeleted?: boolean;
}
