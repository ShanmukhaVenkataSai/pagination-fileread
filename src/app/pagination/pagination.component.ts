import { Component, OnInit } from '@angular/core';
import user_details from '../../assets/user-data/userdata.json';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { } 

  pagination_config:any

  user_details:any=user_details

  pageSize:any=10

  landingPage:any=1

  ngOnInit(): void {
    this.pagination_config={
      currentPage:this.landingPage, // current page is
      itemsPerPage:this.pageSize, // number of rows per page
     // totalItems:0 // length of data. Used when doing server side pagination
    }
    console.log(this.user_details,'user_details');
    
  }

  pageChange(pageNo:any){
    this.pagination_config.currentPage=pageNo
  }

}
