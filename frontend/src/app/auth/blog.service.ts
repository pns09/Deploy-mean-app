import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlogService {



  constructor(private _http: HttpClient) { }


  getallblogs() {
    return this._http.get('post/getallblogs');
  }

  deletepost(_id: string) {

    return this._http.delete('post/deletepost' + `/${_id}`);
  }

  likePost(_id: string) {
    return this._http.put('post/likeBlog' + `/${_id}`, {});
  }

  addComment(_id: string, comment: string) {
    return this._http.post('post/Comment' + `/${_id}`, { comment: comment });
  }
}

