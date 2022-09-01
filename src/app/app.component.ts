import { Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';

  constructor(private loadingBar: LoadingBarService, private router: Router)
  {
    router.events.subscribe(event => this.onRouteEvent(event));
  }

  onRouteEvent(event: Event)
  {
    if (event instanceof NavigationStart)
      this.loadingBar.useRef().start();

    if (event instanceof NavigationEnd)
    this.loadingBar.useRef().complete();

    if (event instanceof NavigationCancel)
      this.loadingBar.useRef().stop();

    if (event instanceof NavigationError)
    this.loadingBar.useRef().stop();
  }
}
