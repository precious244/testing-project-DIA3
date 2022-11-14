import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-upload-cv',
  templateUrl: './modal-upload-cv.component.html',
  styleUrls: ['./modal-upload-cv.component.scss']
})
export class ModalUploadCvComponent implements OnInit {

  @Input() file: any;
  @Input() onUpload: any;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.file.setValue(event.target.files[0]);
  }

  upload() {
    this.onUpload()
  }

}
