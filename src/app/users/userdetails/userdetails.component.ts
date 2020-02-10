import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe((params) => {

    });
  }

  ngOnInit() {
    
  }

}
