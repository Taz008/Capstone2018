import { TestBed, inject } from '@angular/core/testing';

import { StudentDataShareServiceService } from './student-data-share-service.service';

describe('StudentDataShareServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentDataShareServiceService]
    });
  });

  it('should be created', inject([StudentDataShareServiceService], (service: StudentDataShareServiceService) => {
    expect(service).toBeTruthy();
  }));
});
