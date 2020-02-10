import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { APIService } from '../api.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
  public selectedFilter: any;
  public selectedDimension: any;
  public showCustomForm = false;
  public start;
  public end;
  public startTime;
  public endTime;
  public day = 24 * 60 * 60 * 1000;
  @Input() page: string;
  @Input() hidedimension: boolean;
  constructor(private apiService: APIService) { }
  changeFilter() {
    this.showCustomForm = false;
    if (this.selectedFilter == "today") {
      this.startTime = this.getStartOfDay(new Date());
      this.endTime = this.getEndOfDay(new Date());
      this.evaluate();
    } else if (this.selectedFilter == "week") {
      let wStart = new Date().getTime() - (this.day * 7);
      this.startTime = this.getStartOfDay(wStart);
      this.endTime = this.getEndOfDay(new Date());
      this.evaluate();
    } else if (this.selectedFilter == "month") {
      let lDate = this.daysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
      this.startTime = this.getStartOfDay(new Date());
      this.endTime = this.getEndOfDay(new Date());
      this.evaluate();
    } else if (this.selectedFilter == "custom") {
      this.showCustomForm = true;
      this.start = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
      this.end = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    }
  }
  submitCustomData() {
    this.startTime = this.getStartOfDay(this.start);
    this.endTime = this.getEndOfDay(this.end);
    this.evaluate();
  }

  evaluate() {
    this.apiService.fetchList(this.page, this.startTime, this.endTime, this.selectedDimension);
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  getStartOfDay(date) {
    return new Date((new Date(new Date(date).setHours(0)).setMinutes(0))).setSeconds(0);
  }
  getEndOfDay(date) {
    return new Date((new Date(new Date(date).setHours(23)).setMinutes(59))).setSeconds(59);
  }
  ngOnInit() {
    this.selectedFilter = "today";
    this.selectedDimension = "SEE";
    this.changeFilter();
  }

}
