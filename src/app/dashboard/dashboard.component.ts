import { Component, OnInit } from '@angular/core';
import { APIService } from '../shared/api.service';
declare const $: any;
declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  content = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at,`;
  data = {};
  graphData = [];
  activeCount;
  getData = {};
  constructor(private apiService: APIService) { }
  initActivityGraph() {
    if (!this.graphData || this.graphData.length < 1) {
      this.graphData = [{
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
    }
    Morris.Area({
      element: 'morris-extra-area',
      data: this.graphData,
      lineColors: ['#fb9678', '#7E81CB', '#01C0C8'],
      xkey: 'period',
      parseTime: false,
      ykeys: ['likes', 'comments', 'shares'],
      labels: ['Likes', 'Comments', 'Shares'],
      pointSize: 0,
      lineWidth: 0,
      resize: true,
      xLabelFormat: function (x) {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var date = new Date(x.label);
        return days[date.getDay()];;
      },
      hoverCallback: function (index, options, content, row) {
        let total = options.data[index].likes + options.data[index].comments + options.data[index].shares;
        let html = "<div class='morris-hover-point' style='color: #333'> Total: " + total + "</div>";
        return content + html;
      },
      fillOpacity: 0.8,
      behaveLikeLine: true,
      gridLineColor: '#5FBEAA',
      hideHover: 'auto'
    });
  }
  ngOnInit() {
    this.apiService.getDashboardData().subscribe(data => {
      this.data = data;
    });
    this.initActivityGraph();

    this.apiService.getActivityGraphData().subscribe(data => {
      if (data && data.length > 0) {
        this.graphData = data;
        this.initActivityGraph();
      }
    });
    this.apiService.getActiveData().subscribe(data => {
      // this.graphData = data;
      this.getData = data['result'];

    });
    this.apiService.getDashboardData().subscribe(data => {
      this.data = data['result'];
      this.activeCount = data['count'];

      console.log(this.data)
    });
    setTimeout(() => {
      $('.resource-barchart1').sparkline([5, 6, 9, 7, 8, 4, 6], {
        type: 'bar',
        barWidth: '6px',
        height: '32px',
        barColor: '#1abc9c',
        tooltipClassname: 'abc'
      });

      $('.resource-barchart2').sparkline([6, 4, 8, 7, 9, 6, 5], {
        type: 'bar',
        barWidth: '6px',
        height: '32px',
        barColor: '#1abc9c',
        tooltipClassname: 'abc'
      });

    }, 1);
  }
  // ngOnInit() {

  //   this.apiService.getDashboardData().subscribe(data => {
  //     this.data = data['result'];
  //     this.activeCount = data['count'];

  //     console.log(this.data)
  //   });
  //   this.apiService.getActiveData().subscribe(data => {
  //     // this.graphData = data;
  //     this.getData = data['result'];

  //   });
  //   this.apiService.getActivityGraphData().subscribe(data => {
  //     if (data && data.length > 0) {
  //     this.graphData = data;
  //     this.initActivityGraph();
  //     }
  //     });
  //   setTimeout(() => {
  //     $('.resource-barchart1').sparkline([5, 6, 9, 7, 8, 4, 6], {
  //       type: 'bar',
  //       barWidth: '6px',
  //       height: '32px',
  //       barColor: '#1abc9c',
  //       tooltipClassname: 'abc'
  //     });

  //     $('.resource-barchart2').sparkline([6, 4, 8, 7, 9, 6, 5], {
  //       type: 'bar',
  //       barWidth: '6px',
  //       height: '32px',
  //       barColor: '#1abc9c',
  //       tooltipClassname: 'abc'
  //     });


  //     Morris.Bar({
  //       element: 'morris-bar-chart',
  //       data: [{
  //         y: '2006',
  //         a: 100,
  //         b: 90,
  //         c: 60
  //       }, {
  //         y: '2007',
  //         a: 75,
  //         b: 65,
  //         c: 40
  //       }, {
  //         y: '2008',
  //         a: 50,
  //         b: 40,
  //         c: 30
  //       }, {
  //         y: '2009',
  //         a: 75,
  //         b: 65,
  //         c: 40
  //       }, {
  //         y: '2010',
  //         a: 50,
  //         b: 40,
  //         c: 30
  //       }, {
  //         y: '2011',
  //         a: 75,
  //         b: 65,
  //         c: 40
  //       }, {
  //         y: '2012',
  //         a: 100,
  //         b: 90,
  //         c: 40
  //       }],
  //       xkey: 'y',
  //       ykeys: ['a', 'b', 'c'],
  //       labels: ['A', 'B', 'C'],
  //       barColors: ['#5FBEAA', '#5D9CEC', '#cCcCcC'],
  //       hideHover: 'auto',
  //       gridLineColor: '#eef0f2',
  //       resize: true
  //     });
  //   }, 1);
  // }

}
