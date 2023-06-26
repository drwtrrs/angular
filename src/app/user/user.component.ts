import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit{

  allUsers: any;
  @Output() sendtoParent = new EventEmitter();

constructor(private commonService: CommonService, private router: Router) {}
  ngOnInit(): void {
    this.commonService.userAdded.subscribe(res=>{
      console.log("User added from parent");
      this.getLatestUsers();
      });
      this.getLatestUsers();

    }

    getLatestUsers(){
      this.commonService.getLatestUsers().subscribe(res=>{
        console.log(res);
        this.allUsers = res;
    });

  }


  editUser(user){
    this.sendtoParent.emit(user);
    console.log(user);
  }

  deleteUser(user){
      this.commonService.deleteUser(user).subscribe(res=>{
      this.getLatestUsers();
    });
  }

  viewUser(user){
    this.commonService.viewUser(user).subscribe(res=>{
    this.getLatestUsers();
  });
}

  // goToPage(pageName:string):void{
  //   this.router.navigate([`${pageName}`]);
  // }

}
