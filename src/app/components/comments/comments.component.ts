import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog/blog.service';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  paramsBlogId: number = 0;
  paramsPostId: number = 0;

  post: Post;
  comments: Comment[] = [];
  comment: string = '';

  constructor(private route: ActivatedRoute, private blogService: BlogService, private commentService: CommentService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.paramsBlogId = +params.get('id');
      this.paramsPostId = +params.get('nr');
      })

    this.commentService.showComments(this.paramsPostId).subscribe((data) => {
      this.post = data;      
    })
  }

  navigateBack() {
    this.router.navigate([`blog/${this.paramsBlogId}`]);
  }

  onCommentSubmit(commentForm): void {
    this.comment = commentForm.value.comment;

    if (this.comment !== '') {
      let newComment: Comment = {
        id: 0,
        content: this.comment,
        postId: this.paramsPostId,
        post: this.post 
      }      

      this.commentService.createComment(newComment).subscribe((comment) => this.comments.push(comment));

      this.blogService.getBlogs();
    }
    this.router.navigate([`blog/${this.paramsBlogId}/post/${this.paramsPostId}/comments`]);
  }

}
