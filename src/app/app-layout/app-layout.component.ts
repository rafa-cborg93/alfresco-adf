
import { AlfrescoApiService, AuthenticationService } from '@alfresco/adf-core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit{
  usName: string = null;
  isMember = 0;

  constructor(private apiService: AlfrescoApiService, private authService: AuthenticationService) {
  }
  ngOnInit(){
    const api = this.apiService.getInstance();
    this.usName = this.authService.getEcmUsername();
    console.log(this.usName);
    api.core.sitesApi.getSiteMember('Dari',this.usName).then(data=>{
      if(data){
        this.isMember = 1;
      }
    })
  }

}
