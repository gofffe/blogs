import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  postsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Posts/';
  commentsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Comments/';

  constructor(private http: HttpClient) { }

  showComments(postId: number): Observable<Post> {
    return this.http.get<Post>(this.postsUrl + postId);
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment);
  }
}
