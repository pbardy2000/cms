import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type {
  ContentItem,
  CreateContentItem,
  GetContentItemsQueryParams,
  UpdateContentItem,
} from '@cms/common';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentItemService {
  private readonly http = inject(HttpClient);

  getContentItem(id: string): Observable<ContentItem> {
    return this.http.get<ContentItem>(`${environment.API_URL}/content-items/${id}`);
  }

  getContentItems(queryParams: GetContentItemsQueryParams): Observable<ContentItem[]> {
    return this.http.get<ContentItem[]>(`${environment.API_URL}/content-items`, {
      params: new HttpParams({ fromObject: { ...queryParams } }),
    });
  }

  createContentItem(contentItem: CreateContentItem): Observable<ContentItem> {
    return this.http.post<ContentItem>(`${environment.API_URL}/content-items`, contentItem);
  }

  updateContentItem(id: string, contentItem: UpdateContentItem): Observable<ContentItem> {
    return this.http.patch<ContentItem>(`${environment.API_URL}/content-items/${id}`, contentItem);
  }

  deleteContentItem(id: string): Observable<ContentItem> {
    return this.http.delete<ContentItem>(`${environment.API_URL}/content-items/${id}`);
  }

  softDeleteContentItem(id: string): Observable<ContentItem> {
    return this.http.delete<ContentItem>(`${environment.API_URL}/content-items/${id}/soft`);
  }
}
