import { Component, OnInit } from '@angular/core';
import { StudentDataShareServiceService} from '../../services/student-data-share-service.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../studentInfoForBioAndAdmissionsPlacementTab';
@Component({
  selector: 'app-student-pane',
  templateUrl: './student-pane.component.html',
  styleUrls: ['./student-pane.component.css']
})
export class StudentPaneComponent implements OnInit {

  student: StudentInfoForBioAndAdmissionsPlacementTab;
  constructor(private data: StudentDataShareServiceService) { }

  ngOnInit() {
    this.data.currentStudent.subscribe(student => this.student = student)
  }

}
