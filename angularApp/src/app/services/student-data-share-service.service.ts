import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject' 
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTab';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Injectable()
export class StudentDataShareServiceService {

  public student: StudentInfoForBioAndAdmissionsPlacementTab;
 //BehaviorSubject makes sure any component using this service will get up to date data.
 private shareStudentInfo = new BehaviorSubject<StudentInfoForBioAndAdmissionsPlacementTab>(this.student);
 
 //will be used by components.
 currentStudent = this.shareStudentInfo.asObservable();

 constructor() { }

 //calls next on behavioral subject to change its current value.
 changeStudent(student: StudentInfoForBioAndAdmissionsPlacementTab){
  this.shareStudentInfo.next(student);
 }

}
