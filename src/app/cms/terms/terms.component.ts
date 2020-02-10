import { Component, OnInit } from '@angular/core';
import { APIService } from '../../shared/api.service';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  public termsText;
  public orgText;
  public changed=false;
  public isSuccess = false;
  public isError = false;
    constructor(private apiService:APIService) { }
    submit(){
      this.apiService.postCmsData("terms",{
        data: this.termsText
      }).subscribe((response: any) => {
        if (response.status == 200) {
          this.orgText = this.termsText;
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
      if(this.termsText===this.orgText){
        this.changed=false;
        return;
      }
      this.changed=true;
    }
    ngOnInit() {
      this.apiService.getCmsData("terms").subscribe(data=>{
        this.orgText=data;
        this.termsText=data;
      });
    }
}
