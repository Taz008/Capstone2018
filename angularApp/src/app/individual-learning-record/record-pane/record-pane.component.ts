import { Component, OnInit } from '@angular/core';
import { NotesInfoForMiscNotesTab } from '../notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../services/notes-info-for-misc-notes-tab.service';
import { StudentDataShareServiceService } from '../../services/student-data-share-service.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../studentInfoForBioAndAdmissionsPlacementTab';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';

@Component({
  selector: 'app-record-pane',
  templateUrl: './record-pane.component.html',
  styleUrls: ['./record-pane.component.css']
})
export class RecordPaneComponent implements OnInit {

  studentId: any;
  results: NotesInfoForMiscNotesTab[];
  miscNotes: any;
  studentResults: StudentInfoForBioAndAdmissionsPlacementTab[];
  student: StudentInfoForBioAndAdmissionsPlacementTab;

  constructor(private miscNoteService: NotesInfoForMiscNotesTabService, private data: StudentDataShareServiceService, private studentInfoService: StudentInfoForBioAndAdmissionsPlacementTabService) { }

  ngOnInit() {
    this.data.currentStudent.subscribe(student => this.student = student )
  }

  onClick(studentId: any) { // without type info
    this.miscNoteService.getMiscNoteInfo().subscribe((notes: NotesInfoForMiscNotesTab[]) => {
      this.results = notes;
      this.miscNotes = this.results[0].studentName + ' ' + this.results[0].notes;
    });
    this.studentId = studentId;
    console.log(this.studentId);
  }

  onclick(studentId: any){
    this.studentInfoService.getStudentInfo().subscribe((students: StudentInfoForBioAndAdmissionsPlacementTab[]) => {
      this.studentResults = students;
      this.student = this.studentResults[0];
      this.data.changeStudent(this.student);
    });
    console.log(this.student.studentName);
  }

}
