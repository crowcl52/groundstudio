import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];

  constructor() { }

  ngOnInit() {
  }

}
