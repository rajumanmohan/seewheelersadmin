import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router, private toast: ToastrService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        //If no authentication token then redirect to login page
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
