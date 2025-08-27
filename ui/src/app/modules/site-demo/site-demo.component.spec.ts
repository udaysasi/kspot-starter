import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDemoComponent } from './site-demo.component';

describe('SiteDemoComponent', () => {
  let component: SiteDemoComponent;
  let fixture: ComponentFixture<SiteDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
