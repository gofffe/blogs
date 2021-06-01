import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  post: Post;
  
  blogId: number = 0;
  postId: number = 0;

  comment: string = '';

  faArrowLeft = faArrowLeft;

  constructor(private route: ActivatedRoute, private commentService: CommentService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.blogId = +params.get('id');
      this.postId = +params.get('nr');
      })

    this.commentService.showComments(this.postId).subscribe((data) => {
      this.post = data;      
    })
  }

  navigateBack() {
    this.router.navigate([`blog/${this.blogId}`]);
  }

  onCommentSubmit(commentForm): void {
    this.comment = commentForm.value.comment;

    let textarea = document.querySelector('textarea');

    if (this.comment !== '') {
      let newComment: Comment = {
        id: 0,
        content: this.comment,
        postId: this.postId,
        post: this.post 
      }

      this.commentService.createComment(newComment).subscribe(() => {
        this.commentService.showComments(this.postId).subscribe((data) => {
          this.post = data;      
        })
      });

      commentForm.resetForm();
    } else {
      textarea.classList.add('warning');
    }
  }
}