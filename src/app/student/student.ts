import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  student:any[] =[
    {name:"Pippo",city:"Topolino",Gender:"M",Presente:true},
    {name:"Pippa",city:"Caramagna",Gender:"f",Presente:false},
    {name:"Pippy",city:"Centallo",Gender:"f",Presente:false},
    {name:"Pippn",city:"Cravanzana",Gender:"M",Presente:true}

  ];
}
