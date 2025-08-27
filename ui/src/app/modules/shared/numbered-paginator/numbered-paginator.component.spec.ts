import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberedPaginatorComponent } from './numbered-paginator.component';

describe('NumberedPaginatorComponent', () => {
  let component: NumberedPaginatorComponent;
  let fixture: ComponentFixture<NumberedPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberedPaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberedPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
