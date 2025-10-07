import { PageParams } from "../page/index.js";
export declare class ContentItem {
    id: number;
    key: string;
    contentType: string;
    contentModelId: number;
    releaseId: number | null;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    publishAt: string | null;
    data: Record<string, unknown>;
}
export declare class CreateContentItem {
    key: string;
    contentType: string;
    contentModelId: number;
    releaseId: number | null;
    publishAt: string | null;
    data: Record<string, unknown>;
}
export declare class UpdateContentItem {
    id: number;
    key?: string;
    releaseId?: number | null;
    publishAt?: string | null;
    data?: Record<string, unknown>;
}
export declare class GetContentItemsQueryParams extends PageParams {
    key?: string;
    contentModelId?: number;
    contentType?: string;
    version?: number;
    releaseId?: number;
    includeDeleted?: boolean;
}
