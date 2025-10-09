import {
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
} from "class-validator";
import { PageParams } from "../page/index.js";

export class Release {
  @IsUUID()
  id!: string;

  @IsString()
  name!: string;

  @IsDateString()
  createdAt!: string;

  @ValidateIf((o) => o.updatedAt !== null)
  @IsDateString()
  updatedAt!: string | null;

  @ValidateIf((o) => o.deletedAt !== null)
  @IsDateString()
  deletedAt!: string | null;

  @IsDateString()
  publishAt!: string;
}

export class CreateRelease {
  @IsString()
  name!: string;

  @IsDateString()
  publishAt!: string;
}

export class UpdateRelease {
  @IsUUID()
  id!: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateIf((o) => o.publishAt !== null)
  @IsDateString()
  publishAt?: string | null;
}

export class GetReleasesQueryParams extends PageParams {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsBoolean()
  includeDeleted?: boolean;
}
