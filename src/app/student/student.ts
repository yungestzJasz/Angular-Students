import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  imports: [CommonModule],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  // student: any ={ //Any si usa per quando non si conosce il tipo di dato che si andrà a gestire.  
  //   name: "Pippo",
  //   city: "Topolinia",
  //   gender: "M",
  //   presente: true
  // };


  students: any[] =[
    {name: "Pippo", city: "Topolinia", gender: "M", presente: true},
    {name: "Pluto", city: "Topolinia", gender: "M", presente: true},
    {name: "Paperino", city: "Paperopoli", gender: "M", presente: true},
    {name: "Paperina", city: "Paperopoli", gender: "F", presente: true}
  ];
}