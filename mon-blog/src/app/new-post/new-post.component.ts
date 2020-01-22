import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from '../service/post.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
              private postService : PostService,
              private router : Router
              ) { }

  ngOnInit() {
      this.initForm();
  }

  initForm()
  {
      this.postForm= this.formBuilder.group({
          title : ['', Validators.required],
          content : ['', Validators.required]
      });
  }

  onSubmitForm()
  {
    const formValue= this.postForm.value;
    const newPost = new Post(
    0,
    formValue['title'],
    formValue['content'],
    0,
    new Date()
    );

    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
