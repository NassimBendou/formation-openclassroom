import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../service/post.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts : any[];
  postSubscription : Subscription;

  constructor(private postService : PostService) { }

  ngOnInit() {
      this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
          this.posts = posts;
      }
      );
      this.postService.emitPostSubject();
  }

  ngOnDestroy() {
        this.postSubscription.unsubscribe();
   }

}
