import { PageParams } from "../page/index.js";
export declare class ContentItem {
    id: string;
    key: string;
    contentType: string;
    contentModelId: string;
    releaseId: string | null;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    publishAt: string | null;
    data: Record<string, unknown>;
}
export declare class CreateContentItem {
    key: string;
    contentType: string;
    contentModelId: string;
    releaseId: string | null;
    publishAt: string | null;
    data: Record<string, unknown>;
}
export declare class UpdateContentItem {
    id: string;
    key?: string;
    releaseId?: string | null;
    publishAt?: string | null;
    data?: Record<string, unknown>;
}
export declare class GetContentItemsQueryParams extends PageParams {
    key?: string;
    contentModelId?: string;
    contentType?: string;
    version?: number;
    releaseId?: string;
    includeDeleted?: boolean;
}
