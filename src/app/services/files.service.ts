import { map, tap } from 'rxjs';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { File } from '@models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private http = inject(HttpClient)
  private readonly BASE_URL = 'https://api.escuelajs.co/api/v1/files'

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' })
      .pipe(
        tap(content => {
          const blob = new Blob([content], {type})
          saveAs(blob, name)
        }),
        map(() => true)
      )
  }

  uploadFile(file: Blob) {
    const dto = new FormData()
    dto.append('file', file, 'file.jpg')

    return this.http.post<File>(
        `${this.BASE_URL}/upload`,
        dto,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      )
  }
}
