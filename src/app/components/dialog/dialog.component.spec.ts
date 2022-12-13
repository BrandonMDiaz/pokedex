import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let dialogRefMock: MatDialogRef<DialogComponent>;

  beforeEach(async () => {
    dialogRefMock = jasmine.createSpyObj('dialogRef', ['close']);
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: dialogRefMock,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: jasmine.createSpyObj('data', ['close']),
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('close dialog', () => {
    component.close();
    expect(dialogRefMock.close).toHaveBeenCalledWith(false);
  });
  it('continue dialog', () => {
    component.continue();
    expect(dialogRefMock.close).toHaveBeenCalledWith(true);
  });
});
