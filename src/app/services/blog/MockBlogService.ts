import { Subject } from 'rxjs';

import { Blog } from 'src/app/models/Blog';

export class MockBlogService {
  private allBlogs = new Subject<Blog[]>();
  allBlogs$ = this.allBlogs.asObservable();

  constructor() {}

  testArray: Blog[] = [
    { id: 1, title: 'serier', created: new Date(), userId: 900410, posts: [] },
    { id: 2, title: 'onödigt', created: new Date(), userId: 900410, posts: [] },
    { id: 3, title: 'dagar', created: new Date(), userId: 900410, posts: [] },
  ];

  getBlogs(): void {
    this.allBlogs.next(this.testArray);
  }
}