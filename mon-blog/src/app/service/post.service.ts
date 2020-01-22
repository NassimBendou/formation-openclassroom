import { Injectable } from '@angular/core';
import { Subject }  from 'rxjs/subject';

import { Post } from '../model/post.model';

@Injectable()
export class PostService {

  postsSubject= new Subject<any[]>();

  posts=[
    {
        id : 1,
        title: "Mon premier post",
        content: "Sed ut tum ad senem senex de senectute, sic hoc libro ad amicum amicissimus scripsi de amicitia. Tum est Cato locutus, quo"
                  +"erat nemo fere senior temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic enim est habitus) et amicitiae gloria"
                  +"excellens de amicitia loquetur.",
        loveIt: 0,
        createdAt: new Date("2019-12-16T01:00:00")
    },
    {
        id : 2,
        title: "Mon deuxième post",
        content: "Sed ut tum ad senem senex de senectute, sic hoc libro ad amicum amicissimus scripsi de amicitia. Tum est Cato locutus, quo"
                  +"erat nemo fere senior temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic enim est habitus) et amicitiae gloria"
                  +"excellens de amicitia loquetur.",
        loveIt: 0,
        createdAt: new Date("2019-12-10T01:00:00")
    },
      {
          id : 3,
          title: "Mon troisième post",
          content: "Sed ut tum ad senem senex de senectute, sic hoc libro ad amicum amicissimus scripsi de amicitia. Tum est Cato locutus, quo"
                    +"erat nemo fere senior temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic enim est habitus) et amicitiae gloria"
                    +"excellens de amicitia loquetur.",
          loveIt: 0,
          createdAt: new Date("2019-12-10T01:00:00")
      }
    ];

  constructor() { }

  emitPostSubject()
  {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(newPost :Post)
  {
      newPost.id = this.posts[(this.posts.length - 1)].id + 1;
      this.posts.push(newPost);

      this.emitPostSubject();
  }

  deletePost(id :number)
  {
     const post = this.posts.find(
       (s) => {
         return s.id === id;
       }
     );
     const index: number = this.posts.indexOf(post);
     this.posts.splice(index,1);
     this.emitPostSubject();
  }


}
