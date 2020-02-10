import { Component, OnInit } from '@angular/core';
import {APIService} from "../shared/api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [
    './users.component.scss'
  ]
})
export class UsersComponent implements OnInit {
public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiService:APIService) { }

  ngOnInit() {
    this.apiService.getList().subscribe((data) => {
        this.data = data;
        this.filterQuery="";
      });
  }
}
