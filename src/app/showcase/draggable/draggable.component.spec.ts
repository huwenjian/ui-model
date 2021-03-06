import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DraggableComponent } from './draggable.component';
import { UiModelModule } from '@ui-model/angular';

describe('ShowcaseDraggableComponent', () => {
  let component: DraggableComponent;
  let fixture: ComponentFixture<DraggableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableComponent],
      imports: [UiModelModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
