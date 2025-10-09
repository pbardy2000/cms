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
export class ContentItem {
}
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], ContentItem.prototype, "id", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], ContentItem.prototype, "key", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], ContentItem.prototype, "contentType", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], ContentItem.prototype, "contentModelId", void 0);
__decorate([
    ValidateIf((o) => o.releaseId !== null),
    IsUUID(),
    __metadata("design:type", Object)
], ContentItem.prototype, "releaseId", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], ContentItem.prototype, "createdAt", void 0);
__decorate([
    ValidateIf((o) => o.updatedAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], ContentItem.prototype, "updatedAt", void 0);
__decorate([
    ValidateIf((o) => o.deletedAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], ContentItem.prototype, "deletedAt", void 0);
__decorate([
    ValidateIf((o) => o.publishAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], ContentItem.prototype, "publishAt", void 0);
__decorate([
    IsObject(),
    __metadata("design:type", Object)
], ContentItem.prototype, "data", void 0);
export class CreateContentItem {
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateContentItem.prototype, "key", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateContentItem.prototype, "contentType", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateContentItem.prototype, "contentModelId", void 0);
__decorate([
    ValidateIf((o) => o.releaseId !== null),
    IsUUID(),
    __metadata("design:type", Object)
], CreateContentItem.prototype, "releaseId", void 0);
__decorate([
    ValidateIf((o) => o.publishAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], CreateContentItem.prototype, "publishAt", void 0);
__decorate([
    IsObject(),
    __metadata("design:type", Object)
], CreateContentItem.prototype, "data", void 0);
export class UpdateContentItem {
}
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], UpdateContentItem.prototype, "id", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], UpdateContentItem.prototype, "key", void 0);
__decorate([
    IsOptional(),
    ValidateIf((o) => o.releaseId !== null),
    IsUUID(),
    __metadata("design:type", Object)
], UpdateContentItem.prototype, "releaseId", void 0);
__decorate([
    IsOptional(),
    ValidateIf((o) => o.publishAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], UpdateContentItem.prototype, "publishAt", void 0);
__decorate([
    IsOptional(),
    IsObject(),
    __metadata("design:type", Object)
], UpdateContentItem.prototype, "data", void 0);
export class GetContentItemsQueryParams extends PageParams {
}
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], GetContentItemsQueryParams.prototype, "key", void 0);
__decorate([
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], GetContentItemsQueryParams.prototype, "contentModelId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], GetContentItemsQueryParams.prototype, "contentType", void 0);
__decorate([
    ValidateIf((o) => o.contentType),
    IsNumber(),
    __metadata("design:type", Number)
], GetContentItemsQueryParams.prototype, "version", void 0);
__decorate([
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], GetContentItemsQueryParams.prototype, "releaseId", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], GetContentItemsQueryParams.prototype, "includeDeleted", void 0);
