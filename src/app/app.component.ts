import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // logic resides here for angular app
  title = 'ng-personal';

  activeStatus:Boolean = false;

  public onBurgerClick(): void {
    this.activeStatus = !this.activeStatus;
  }
  public resetActiveStatus(): void {
    this.activeStatus = false;
  }
}
