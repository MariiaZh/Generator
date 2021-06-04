import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGeneratorComponent } from './word-generator.component';

describe('WordGeneratorComponent', () => {
  let component: WordGeneratorComponent;
  let fixture: ComponentFixture<WordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
