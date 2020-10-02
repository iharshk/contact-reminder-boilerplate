import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(
    private _requestService: RequestService
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem("access-token"))
    localStorage.getItem("access-token");
    this.getUserData()
  }

  getUserData(){
    let slug = 'user/getotp';
    
    this._requestService.get(environment.backendUrl + slug).subscribe((res:any) => {
      console.log(res)
      if(res && res.data){
       
      }
    }, err =>{
      console.log(err)
    });
  }

}
