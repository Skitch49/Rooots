import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {


  dataLoaded = false

  constructor(){}

  ngOnInit(): void {
    this.dataLoaded = true    
  }

}
