import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRendererComponentComponent } from './table-renderer-component.component';

describe('TableRendererComponentComponent', () => {
  let component: TableRendererComponentComponent;
  let fixture: ComponentFixture<TableRendererComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRendererComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRendererComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
