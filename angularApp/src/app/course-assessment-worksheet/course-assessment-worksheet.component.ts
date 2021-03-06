import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CourseInfoForAssessment } from "./courseInfoForAssessment";
import { CourseInformationObject } from "./course-information-object";

@Component({
  selector: "app-course-assessment-worksheet",
  templateUrl: "./course-assessment-worksheet.component.html",
  styleUrls: ["./course-assessment-worksheet.component.css"]
})
export class CourseAssessmentWorksheetComponent implements OnInit {
  courseInformationObj: CourseInformationObject;

  constructor() {
    this.courseInformationObj = new CourseInformationObject();
  }

  ngOnInit(): void {}

  onSave() {
    console.log(this.courseInformationObj.studentLearningOutcomes);
  }
}
