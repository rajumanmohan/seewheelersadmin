import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  private fetchSubject: BehaviorSubject<any>;
  private activityGraphSubject: BehaviorSubject<any>;
  // baseUrl = "http://18.218.21.247:4005/"
  baseUrl = "http://18.191.234.250:4005/"
  private urls = {
    login: "users/adminlogin",
    changepw: "users/ChangePassword",
    forgot: "users/userforgotpassword",
    matchOtp: "users/otpverification",
    users: "assets/data/data.json",
    claps: "assets/data/likesdata.json",
    thoughts: "assets/data/likesdata.json",
    comments: "assets/data/commentsdata.json",
    shares: "assets/data/likesdata.json",
    posts: "assets/data/postsdata.json",
    jobs: "assets/data/jobsdata.json",
    groups: "assets/data/groupsdata.json",
    campaigns: "assets/data/campaignsdata.json",
    channels: "assets/data/channelsdata.json",
    polls: "assets/data/pollsdata.json",
    notifications: "assets/data/notificationsdata.json",
    dashboard: "users/dashboardcount",
    activeCount: "users/activitiescount",
    activitygraph: "assets/data/activitygraphdata.json",
    aboutus: "",
    privacy: "",
    newsletter: "",
    blog: "",
    terms: "",
    questions: "",
    groupsdashboard: "assets/data/groupsdashboard.json"
  }
  constructor(private http: HttpClient) {
    this.fetchSubject = new BehaviorSubject([]);
    this.activityGraphSubject = new BehaviorSubject([]);
  }
  //Date Utils
  getDayName(d) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(d);
    return days[date.getDay()];
  }
  fetchList(page, start, end, dimension) {
    let reqBody = {};
    if (start) {
      reqBody['start'] = start;
    }
    if (end) {
      reqBody['end'] = end;
    }
    if (dimension) {
      reqBody['dimension'] = dimension;
    }

    this.http.get(this.urls[page], reqBody).subscribe(data => {
      if (page == 'activitygraph') {
        this.activityGraphSubject.next(data);
      } else {
        this.fetchSubject.next(data);
      }
    });
  }
  UserLogin(params) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + "" + this.urls['login'], params, { headers })
  }
  changePassword(params) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + "" + this.urls['changepw'], params, { headers })
  }
  forgotPassword(params) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + "" + this.urls['forgot'], params, { headers })
  }
  matchOtp(params) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.baseUrl + "" + this.urls['matchOtp'], params, { headers })
  }
  getList() {
    return this.fetchSubject.asObservable();
  }

  //Activity Graph API
  getActivityGraphData() {
    return this.activityGraphSubject.asObservable();
  }
  //Dashboard API
  getDashboardData() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.baseUrl + "" + this.urls["dashboard"], { headers });
  }
  getActiveData() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.baseUrl + "" + this.urls["activeCount"], { headers });
  }

  //CMS
  getCmsData(page) {
    return this.http.get(this.urls[page]);
  }
  postCmsData(page, data) {
    return this.http.post(this.urls[page], data);
  }


  //Common Dashboard Data
  getCommonDashboardData(page) {
    return this.http.get(this.urls[page + "dashboard"]);
  }
}
