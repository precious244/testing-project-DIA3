import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadCvComponent } from './modal-upload-cv/modal-upload-cv.component';



@NgModule({
  declarations: [
    ModalUploadCvComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalUploadCvComponent
  ]
})
export class ModalModule { }
