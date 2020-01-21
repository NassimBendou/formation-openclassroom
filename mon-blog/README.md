# MonBlog



## Ajout des posts

 - [x] créer un service qui stockera l'array des posts et pourra les émettre sous forme de Subject
 - [x] Le service permettra également l'ajout d'un nouveau post 
 - [x] La suppression d'un post existant.
 
 - [x] Intégrer un bouton Supprimer postsur chaque  PostListItemComponent 


 - [ ] Créer un nouveau component,  NewPostComponent , qui comportera un formulaire (méthode template ou réactive, au choix) qui permettra à l'utilisateur d'entrer :
    1. le titre
    2. le contenu d'un nouveau post
  
 - [ ] Ce nouveau post sera ensuite créé et ajouté au service, et l'utilisateur sera redirigé vers la liste des posts.

 - [ ] Intégrer un menu de navigation en haut (avec le routing correspondant), permettant de naviguer vers la liste des posts (  /posts  ) et vers le formulaire (  /new  ) (le path vide sera redirigé vers le path  /posts  ) — le lien du menu correspondant à la route active comportera la classe  active.

 - [ ] Faire en sorte que le changement du nombre de loveIts soit enregistré dans le service.
