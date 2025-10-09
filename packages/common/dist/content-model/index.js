var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsDateString, IsNumber, IsObject, IsOptional, IsString, IsUUID, ValidateIf, } from "class-validator";
import { PageParams } from "../page/index.js";
export class ContentModel {
}
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], ContentModel.prototype, "id", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], ContentModel.prototype, "type", void 0);
__decorate([
    ValidateIf((o) => o.description !== null),
    IsString(),
    __metadata("design:type", Object)
], ContentModel.prototype, "description", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], ContentModel.prototype, "version", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], ContentModel.prototype, "createdAt", void 0);
__decorate([
    ValidateIf((o) => o.updatedAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], ContentModel.prototype, "updatedAt", void 0);
__decorate([
    ValidateIf((o) => o.deletedAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], ContentModel.prototype, "deletedAt", void 0);
__decorate([
    IsObject(),
    __metadata("design:type", Object)
], ContentModel.prototype, "data", void 0);
export class CreateContentModel {
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateContentModel.prototype, "type", void 0);
__decorate([
    ValidateIf((o) => o.description !== null),
    IsString(),
    __metadata("design:type", Object)
], CreateContentModel.prototype, "description", void 0);
__decorate([
    IsObject(),
    __metadata("design:type", Object)
], CreateContentModel.prototype, "data", void 0);
export class UpdateContentModel {
}
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], UpdateContentModel.prototype, "id", void 0);
__decorate([
    IsOptional(),
    ValidateIf((o) => o.description !== null),
    IsString(),
    __metadata("design:type", Object)
], UpdateContentModel.prototype, "description", void 0);
__decorate([
    IsOptional(),
    IsObject(),
    __metadata("design:type", Object)
], UpdateContentModel.prototype, "data", void 0);
export class GetContentModelsQueryParams extends PageParams {
}
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], GetContentModelsQueryParams.prototype, "type", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], GetContentModelsQueryParams.prototype, "includeDeleted", void 0);
