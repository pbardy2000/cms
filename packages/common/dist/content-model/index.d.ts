import { PageParams } from "../page/index.js";
export declare class ContentModel {
    id: string;
    type: string;
    description: string | null;
    version: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    data: Record<string, unknown>;
}
export declare class CreateContentModel {
    type: string;
    description: string | null;
    data: Record<string, unknown>;
}
export declare class UpdateContentModel {
    id: string;
    description?: string | null;
    data?: Record<string, unknown>;
}
export declare class GetContentModelsQueryParams extends PageParams {
    type?: string;
    includeDeleted?: boolean;
}
