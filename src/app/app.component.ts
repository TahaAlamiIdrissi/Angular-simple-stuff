import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formationAngular';
  onUpdate=false;

  currentCourse = {
                    id:0,
                    title:"",
                    active:false
                  };
  courses = [{
                id:1,
                title:"Spring boot",
                active:true
              },
              {
                id:2,
                title:"Scala",
                active:true
              },
              {
                id:3,
                title:"Haskell",
                active:false
              },
              {
                id:4,
                title:"C/C++",
                active:true
              }
            ];

  addCourse(){
    this.courses.unshift(this.currentCourse);
    this.currentCourse={
      id:0,
      title:"",
      active:false
    };
  }
  deleteCourse(course){

    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
     
      let index=this.courses.indexOf(course);
      this.courses.splice(index,1);
  }
  editCourse(course){
    this.currentCourse=course;
    this.onUpdate=true;
  }
  updateCourse(){
    this.onUpdate=false;
  }
  toggleButton(course){
    course.active=!course.active;
  }
}
