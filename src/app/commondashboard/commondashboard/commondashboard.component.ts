import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../shared/api.service';
import { getViewData } from '@angular/core/src/render3/state';
declare const $: any;
declare var Morris: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './commondashboard.component.html',
  styleUrls: ['./commondashboard.component.scss']
})
export class CommonDashboardComponent implements OnInit {
  data={};
  graphData=[];
  public users=[
    {
      "name": "Jhon",
      "gender": "male",
      "nationality": "USA",
      "age": 61,
      "active": 20
    },{
      "name": "Peter",
      "gender": "male",
      "nationality": "UK",
      "age": 40,
      "active": 200
    },{
      "name": "Anna",
      "gender": "female",
      "nationality": "Germany",
      "age": 25,
      "active": 300
    },{
      "name": "Smith",
      "gender": "male",
      "nationality": "USA",
      "age": 20,
      "active": 50
    },{
      "name": "Jhon",
      "gender": "male",
      "nationality": "USA",
      "age": 61,
      "active": 20
    },{
      "name": "Peter",
      "gender": "male",
      "nationality": "UK",
      "age": 40,
      "active": 200
    },{
      "name": "Anna",
      "gender": "female",
      "nationality": "Germany",
      "age": 25,
      "active": 300
    },{
      "name": "Smith",
      "gender": "male",
      "nationality": "USA",
      "age": 20,
      "active": 50
    },{
      "name": "Jhon",
      "gender": "male",
      "nationality": "USA",
      "age": 61,
      "active": 20
    },{
      "name": "Peter",
      "gender": "male",
      "nationality": "UK",
      "age": 40,
      "active": 200
    },{
      "name": "Anna",
      "gender": "female",
      "nationality": "Germany",
      "age": 25,
      "active": 300
    },{
      "name": "Smith",
      "gender": "male",
      "nationality": "USA",
      "age": 20,
      "active": 50
    }
  ];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public page:string;
  constructor(private route: ActivatedRoute, private apiService: APIService) {
    route.queryParams.subscribe((params) => {     
      this.getData(params.page);      
    });

  }
  getData(page) {
    this.apiService.getCommonDashboardData(page).subscribe(data=>{
      this.data=data;
    });
  }
  ngOnInit() {
    
    this.graphData=[{
      period: 1566345600000,
      likes: 0,
      comments: 0,
      shares: 0
    }, {
      period: 1566432000000,
      likes: 50,
      comments: 15,
      shares: 5
    }, {
      period: 1566518400000,
      likes: 20,
      comments: 50,
      shares: 65
    }, {
      period: 1566604800000,
      likes: 60,
      comments: 12,
      shares: 7
    }, {
      period: 1566691200000,
      likes: 30,
      comments: 20,
      shares: 120
    }, {
      period: 1566777600000,
      likes: 25,
      comments: 80,
      shares: 40
    }, {
      period: 1566864000000,
      likes: 10,
      comments: 10,
      shares: 10
    }];  
    Morris.Area({
      element: 'morris-extra-area',
      data: this.graphData,     
      lineColors: ['#fb9678', '#7E81CB', '#01C0C8'],
      xkey: 'period',
      parseTime:false,
      ykeys: ['likes', 'comments', 'shares'],
      labels: ['Likes', 'Comments', 'Shares'],
      pointSize: 0,
      lineWidth: 0,
      resize: true,
      xLabelFormat:function (x){
       var date= new Date(x.label);
        return date.getDate();
      },
      hoverCallback: function (index, options, content, row) {
        let total=options.data[index].likes+options.data[index].comments+options.data[index].shares;
        let html="<div class='morris-hover-point' style='color: #333'> Total: "+ total+"</div>";
        return content+html;
      },        
      fillOpacity: 0.8,
      behaveLikeLine: true,
      gridLineColor: '#5FBEAA',
      hideHover: 'auto'
    });
  
  }


}
