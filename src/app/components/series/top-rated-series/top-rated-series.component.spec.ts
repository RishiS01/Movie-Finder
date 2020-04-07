import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedSeriesComponent } from './top-rated-series.component';

describe('TopRatedSeriesComponent', () => {
  let component: TopRatedSeriesComponent;
  let fixture: ComponentFixture<TopRatedSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
