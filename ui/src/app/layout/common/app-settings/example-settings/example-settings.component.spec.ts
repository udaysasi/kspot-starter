import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSettingsComponent } from './example-settings.component';

describe('ExampleSettingsComponent', () => {
  let component: ExampleSettingsComponent;
  let fixture: ComponentFixture<ExampleSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
