import { Component, Input, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIt: number;
  @Input() created_at: Date;

  constructor(private postService :PostService) {
  this.loveIt=0;
  }

  ngOnInit() {
  }
  onDeletePost()
  {
    this.postService.deletePost(this.id);
    console.log(this.id);
  }
   onLoveIt()
    {
      this.postService.loveIt(this.id);
    }
    onDontLoveIt()
    {
      this.postService.dontLoveIt(this.id);
    }
}
