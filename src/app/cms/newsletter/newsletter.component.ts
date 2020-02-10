import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../../shared/api.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  cmsForm: FormGroup;
  public isSuccess = false;
  public isError = false;
  submitted=false;
  formVisible=false;
  listVisible=true;
  nlData=[];
  title;
  description;
  constructor(private formBuilder: FormBuilder,private apiService:APIService) { }
  addForm(){
    this.title="";
    this.description="";
    this.submitted=false;
    this.formVisible=true;
    this.listVisible=false;
  }
  cancel(){
    this.listVisible=true;
    this.formVisible=false;
  }
  dateToView(time){
    let date=new Date(time);
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
  }
  ngOnInit() {
    this.cmsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.apiService.getCmsData("newsletter").subscribe(response=>{
      //this.nlData=response;
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.cmsForm.invalid) {
        return;
    }
    let obj={
      "title":this.title,
      "description":this.description,
      "date":new Date().getTime()
    };
    
    //remove this once api is ready
    this.nlData.push(obj);
    this.listVisible=true;
    this.formVisible=false;

    this.apiService.postCmsData("newsletter", obj).subscribe((response: any) => {
      if (response.status == 200) {
        this.nlData.push(obj);
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
          this.listVisible = true;
          this.formVisible = false;
        }, 2000);
      } else {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 2000);
      }
    });

}

}
