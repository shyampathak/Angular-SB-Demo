import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import{Student} from '../student'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  userForm: any;
  // "id": number;
  // "name": string;
  // "address": string;
  // "studyin": string;
  student:Student;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group(
      {
      id: ['', [Validators.required]],
      name: ['',[Validators.required]],
      address: [''],
      studyin: [''],
    }
    );
  }

  onSubmit(){
    if(this.userForm.valid){
      var user = this.userForm
      debugger;
      this.apiService.createStudent(this.userForm.value).subscribe((res)=>{
        console.log("INSETED RECORD FOR : ", res)
      });

      // alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }
  }

}
