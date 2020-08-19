import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterSearchComponent } from './twitter-search.component';
import { TwitterSearchService } from './twitter-search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TwitterSearchComponent', () => {
  let component: TwitterSearchComponent;
  let fixture: ComponentFixture<TwitterSearchComponent>;
  let service: TwitterSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterSearchComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TwitterSearchComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(TwitterSearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
