import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassInfo } from '../course-assessment-worksheet/classInfo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClassInformationService {

  constructor(private http: HttpClient) {
  }

  public getClassInfo(): Observable<ClassInfo[]> {
    console.log('Made it to the service');
    return this.http.get<ClassInfo[]>("http://localhost:8080/classInfo");
  };

}
