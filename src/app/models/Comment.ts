import { Post } from "./Post";

export class Comment {
    id: number;
    content: string;
    postId: number;
    post: Post;
}