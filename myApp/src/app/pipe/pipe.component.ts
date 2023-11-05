import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  myname = 'Md Mazharul Haque';
  currectdate = new Date();
  emp = {name: 'Md Mazharul Haque', age: 25, salary: 50000, address:{a1: 'Paris', a2: 'France'}};

  courses = ['Angular', 'React', 'Vue', 'Node', 'Express', 'MongoDB',];
}

