import { Component, Output, EventEmitter } from '@angular/core';
import { CommonService } from './common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angcrud2';

  // ngForm!:FormGroup
  // submitted = false;

  userObj={
    userName: "",
    email: "",
    number: "",
    id: ""
  };

  @Output() sendtoParent = new EventEmitter();

  isEdit: boolean;

  constructor(private commonService: CommonService, private formBuilder: FormBuilder) {}

  // ngOninit(){
  //   this.ngForm = this.formBuilder.group({
  //     fName:['',Validators.required]
  //   })
  // }

  addUser(userForm){
    console.log(userForm.value);
    let obj = userForm.value;
    obj.id = null;
    this.commonService.createUser(obj).subscribe(response=>{
      console.log("User added successfully");
      userForm.form.reset();
      this.commonService.informChild();
    });
  }

  receiveUser(user){
    console.log(user);
    this.userObj = Object.assign({}, user);
    this.isEdit = true;
  }

  updateUser(userForm){
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      console.log("User Updated");
      this.commonService.informChild();
      this.isEdit = false;
      userForm.form.reset();


    });
  }

}
