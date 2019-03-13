import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // logic resides here for angular app
  constructor(private animateScrollService: NgAnimateScrollService){}

  ngOnInit() {
  }

  navigateToHeader(headerName?:string, duration?:number) {
    if (duration == null) {
      duration = 1500;
    }
    this.animateScrollService.scrollToElement(headerName, duration)
}
  title = 'ng-personal';

  activeStatus:Boolean = false;

  public onBurgerClick(): void {
    this.activeStatus = !this.activeStatus;
  }
  public resetActiveStatus(): void {
    this.activeStatus = false;
  }
}
