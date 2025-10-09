import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type {
  ContentModel,
  CreateContentModel,
  GetContentModelsQueryParams,
  UpdateContentModel,
} from '@cms/common';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentModelService {
  private readonly http = inject(HttpClient);

  getContentModel(id: string) {
    return this.http.get<ContentModel>(`${environment.API_URL}/content-models/${id}`);
  }

  getContentModels(queryParams: GetContentModelsQueryParams) {
    return this.http.get<ContentModel[]>(`${environment.API_URL}/content-models`, {
      params: new HttpParams({ fromObject: { ...queryParams } }),
    });
  }

  createContentModel(contentModel: CreateContentModel) {
    return this.http.post<ContentModel>(`${environment.API_URL}/content-models`, contentModel);
  }

  updateContentModel(id: string, contentModel: UpdateContentModel) {
    return this.http.put<ContentModel>(`${environment.API_URL}/content-models/${id}`, contentModel);
  }

  deleteContentModel(id: string) {
    return this.http.delete<ContentModel>(`${environment.API_URL}/content-models/${id}`);
  }

  softDeleteContentModel(id: string) {
    return this.http.delete<ContentModel>(`${environment.API_URL}/content-models/${id}/soft`);
  }
}
