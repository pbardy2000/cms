var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsDateString, IsOptional, IsString, IsUUID, ValidateIf, } from "class-validator";
import { PageParams } from "../page/index.js";
export class Release {
}
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], Release.prototype, "id", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], Release.prototype, "name", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], Release.prototype, "createdAt", void 0);
__decorate([
    ValidateIf((o) => o.updatedAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], Release.prototype, "updatedAt", void 0);
__decorate([
    ValidateIf((o) => o.deletedAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], Release.prototype, "deletedAt", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], Release.prototype, "publishAt", void 0);
export class CreateRelease {
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateRelease.prototype, "name", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CreateRelease.prototype, "publishAt", void 0);
export class UpdateRelease {
}
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], UpdateRelease.prototype, "id", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], UpdateRelease.prototype, "name", void 0);
__decorate([
    IsOptional(),
    ValidateIf((o) => o.publishAt !== null),
    IsDateString(),
    __metadata("design:type", Object)
], UpdateRelease.prototype, "publishAt", void 0);
export class GetReleasesQueryParams extends PageParams {
}
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], GetReleasesQueryParams.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], GetReleasesQueryParams.prototype, "includeDeleted", void 0);
