import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TwitterSearchService } from './twitter-search.service';

describe('TwitterSearchService', () => {
  let service: TwitterSearchService;

  beforeEach(() => {
    let httpMock: HttpTestingController;
    let injector: TestBed;

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    injector = getTestBed();
    service = injector.get(TwitterSearchService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
