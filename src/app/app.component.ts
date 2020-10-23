import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';
import { OdczytajService } from './services/odczytaj.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  zmienna: any;
  posts: any;

  constructor(public matDialog: MatDialog, private odczyt:OdczytajService) {
    this.pobierz_dane();
  }

  pobierz_dane() {

    this.odczyt.getPosts()

      .subscribe(response => {

        this.posts = response;

      });

}


createPost(input: any){

  let post = {title: input.value};

  input.value = '';



  this.odczyt.create(post)

    .subscribe((response: { id }) => {

      post['id'] = response.id;

      this.posts.splice(0,0, post);

    });

}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "70%";
    dialogConfig.width = "60%";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  }



}
