import { Component, OnInit } from '@angular/core';
import { APIService } from '../../shared/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
public aboutText;
public orgText;
public changed=false;
public isSuccess = false;
  public isError = false;
  constructor(private apiService:APIService) { }
  submit(){
    this.apiService.postCmsData("aboutus",{
      data:this.aboutText
    }).subscribe((response:any)=>{
      if (response.status == 200) {
        this.orgText=this.aboutText;
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
  textChange(){
    if(this.aboutText===this.orgText){
      this.changed=false;
      return;
    }
    this.changed=true;
  }
  ngOnInit() {
    this.apiService.getCmsData("aboutus").subscribe(data=>{
      this.orgText=data;
      this.aboutText=data;
    });
  }
}
