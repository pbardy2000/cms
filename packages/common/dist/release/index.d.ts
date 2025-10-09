import { PageParams } from "../page/index.js";
export declare class Release {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    publishAt: string;
}
export declare class CreateRelease {
    name: string;
    publishAt: string;
}
export declare class UpdateRelease {
    id: string;
    name?: string;
    publishAt?: string | null;
}
export declare class GetReleasesQueryParams extends PageParams {
    name?: string;
    includeDeleted?: boolean;
}
