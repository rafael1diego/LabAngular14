import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Heroes';
  constructor() { this.reset(); }

  
  addHero(name: string){
    name = name.trim();
    if(!name) { return; }
    let hero = {name, canFly: this.canFly};
    this.heroes = this.heroes.concat(hero);
  }

  reset() {this.heroes = [];}

}