import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  blogsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Blogs/';
  postsUrl: string = 'https://mi-blogs.azurewebsites.net/api/Posts/';

  constructor(private http: HttpClient) { }

    //HTTP requests for posts
    showPosts(blogId: number): Observable<Blog> {
      return this.http.get<Blog>(this.blogsUrl + blogId);
    }
  
    createPost(post: Post): Observable<Post> {
      return this.http.post<Post>(this.postsUrl, post);
    }
  
    changePost(post: Post): Observable<Post> {
      return this.http.put<Post>(this.postsUrl + post.id, post);
    }
  
    removePost(postId: number): Observable<Post> {
      return this.http.delete<Post>(this.postsUrl + postId);
    }
}
