import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseAssessmentWorksheetComponent } from './course-assessment-worksheet/course-assessment-worksheet.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { IndividualLearningRecordComponent } from './individual-learning-record/individual-learning-record.component';
import { StudentPaneComponent } from './individual-learning-record/student-pane/student-pane.component';
import { RecordPaneComponent } from './individual-learning-record/record-pane/record-pane.component';
import { CourseAssessmentCoursePaneComponent } from './course-assessment-worksheet/course-assessment-course-pane/course-assessment-course-pane.component';
import { CourseAssessmentCourseInformationComponent } from './course-assessment-worksheet/course-assessment-course-pane/course-assessment-course-information/course-assessment-course-information.component';
import { CourseAssessmentCourseStudentLearningOutcomesComponent } from './course-assessment-worksheet/course-assessment-course-pane/course-assessment-course-student-learning-outcomes/course-assessment-course-student-learning-outcomes.component';
import { CourseAssessmentStudentPaneComponent } from './course-assessment-worksheet/course-assessment-student-pane/course-assessment-student-pane.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { NotesInfoForMiscNotesTabService } from './services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from './services/student-info-for-bio-and-admissions-placement-tab.service';
import { CourseInformationService } from './services/course-information-service.service';
import { StudentDataShareServiceService } from './services/student-data-share-service.service'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseAssessmentWorksheetComponent,
    TabsComponent,
    TabComponent,
    IndividualLearningRecordComponent,
    StudentPaneComponent,
    RecordPaneComponent,
    CourseAssessmentCoursePaneComponent,
    CourseAssessmentCourseInformationComponent,
    CourseAssessmentCourseStudentLearningOutcomesComponent,
    CourseAssessmentStudentPaneComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [CourseInformationService, NotesInfoForMiscNotesTabService, StudentInfoForBioAndAdmissionsPlacementTabService, HttpClientModule, StudentDataShareServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
