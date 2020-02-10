import { Component, OnInit } from '@angular/core';
import { APIService } from '../shared/api.service';
@Component({
  selector: 'app-posts',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiservice:APIService) { }
  getDateString(date){
    if(!date){
      return "";
    }
  let dt=new Date(date);
    return dt.getDate()+"-"+(dt.getMonth()+1)+"-"+dt.getFullYear()+" "+dt.getHours()+":"+dt.getMinutes();
  }
  ngOnInit() {
  this.apiservice.getList().subscribe(data=>{
    this.data=data;
    this.filterQuery="";
  });
  }

}



