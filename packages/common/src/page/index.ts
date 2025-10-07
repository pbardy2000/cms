import { IsNumber, IsOptional } from "class-validator";

export class PageParams {
  @IsOptional()
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsNumber()
  offset?: number;
}
