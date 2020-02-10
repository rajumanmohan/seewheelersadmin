import { Component, OnInit } from '@angular/core';
import { APIService } from '../../shared/api.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  public privacyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  public orgText;
  public changed = false;
  public isSuccess = false;
  public isError = false;
  constructor(private apiService: APIService) { }
  submit() {
    this.apiService.postCmsData("privacy",{
      data: this.privacyText
    }).subscribe((response: any) => {
      if (response.status == 200) {
        this.orgText = this.privacyText;
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
          this.textChange();
        }, 2000);
      } else {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 2000);
      }
    });
  }
  textChange() {
    if (this.privacyText === this.orgText) {
      this.changed = false;
      return;
    }
    this.changed = true;
  }
  ngOnInit() {
    this.apiService.getCmsData("privacy").subscribe(data => {
      this.orgText = data;
      //this.privacyText=data;
    });
  }
}
