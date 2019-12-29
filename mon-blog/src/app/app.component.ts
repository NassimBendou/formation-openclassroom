import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-blog';

  posts=[
  {
      title: "Mon premier post",
      content: "Sed ut tum ad senem senex de senectute, sic hoc libro ad amicum amicissimus scripsi de amicitia. Tum est Cato locutus, quo"
                +"erat nemo fere senior temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic enim est habitus) et amicitiae gloria"
                +"excellens de amicitia loquetur.",
      loveIts: 0,
      created_at: new Date()
  },
  {
      title: "Mon deuxième post",
      content: "Sed ut tum ad senem senex de senectute, sic hoc libro ad amicum amicissimus scripsi de amicitia. Tum est Cato locutus, quo"
                +"erat nemo fere senior temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic enim est habitus) et amicitiae gloria"
                +"excellens de amicitia loquetur.",
      loveIts: 0,
      created_at: new Date()
  }
  ]

}




