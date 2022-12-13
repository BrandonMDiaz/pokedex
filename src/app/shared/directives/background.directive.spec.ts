import { BackgroundDirective } from './background.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
@Component({
  template: `<h2 pokemonBackground="fire">This is RED as fire</h2>`,
})
class TestComponent {}

describe('BackgroundDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let elements: any;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BackgroundDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding
    component = fixture.componentInstance;

    // all elements with an attached HighlightDirective
    elements = fixture.debugElement.queryAll(By.directive(BackgroundDirective));
  });
  it('should have red background', () => {
    const color = elements[0].nativeElement.style.backgroundColor;
    console.log(color);
    expect(color).toBe('rgb(240, 128, 48)');
  });
});
