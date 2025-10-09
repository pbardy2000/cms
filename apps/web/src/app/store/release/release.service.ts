import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { CreateRelease, GetReleasesQueryParams, Release, UpdateRelease } from '@cms/common';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReleaseService {
  private readonly http = inject(HttpClient);

  getRelease(id: string) {
    return this.http.get<Release>(`${environment.API_URL}/releases/${id}`);
  }

  getReleases(queryParams: GetReleasesQueryParams) {
    return this.http.get<Release[]>(`${environment.API_URL}/releases`, {
      params: new HttpParams({ fromObject: { ...queryParams } }),
    });
  }

  createRelease(release: CreateRelease) {
    return this.http.post<Release>(`${environment.API_URL}/releases`, release);
  }

  updateRelease(id: string, release: UpdateRelease) {
    return this.http.put<Release>(`${environment.API_URL}/releases/${id}`, release);
  }

  deleteRelease(id: string) {
    return this.http.delete<Release>(`${environment.API_URL}/releases/${id}`);
  }

  softDeleteRelease(id: string) {
    return this.http.delete<Release>(`${environment.API_URL}/releases/${id}/soft`);
  }
}
