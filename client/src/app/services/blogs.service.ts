import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private http: HttpClient) { }

  getAll<T>() {
    return this.http.get<T>("http://localhost:5000/posts");
  }

  get<T>(id: string) {
    return this.http.get<T>(`http://localhost:5000/post/${id}`);
  }

  delete<T>(id: string) {
    const token = sessionStorage.getItem("jwt");

    const headers = {
      "Authorization": `Bearer ${token}`
    };

    return this.http.delete<T>(`http://localhost:5000/post/${id}`, { headers });
  }
}
