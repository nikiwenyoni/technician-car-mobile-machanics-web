import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOverviewComponent } from './icon-overview.component';

describe('IconOverviewComponent', () => {
  let component: IconOverviewComponent;
  let fixture: ComponentFixture<IconOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
