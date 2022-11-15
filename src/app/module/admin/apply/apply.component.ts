import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobService } from 'src/app/services/job/job.service';
import { UploadFileService } from 'src/app/services/upload-cv/upload-file.service';
import { ModalUploadCvComponent } from 'src/app/shared/component/modal/modal-upload-cv/modal-upload-cv.component';
import { ApplyModel } from './model/apply.model';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  applyModel = new ApplyModel();

  constructor(
    private readonly modalService: NgbModal,
    public readonly jobService: JobService,
    public readonly uploadCvService: UploadFileService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
          jobStatus: "visible"
        }
        this.jobService.getDetailJob(params).subscribe(
          (response: any) => {
            this.applyModel.applyModelForm = response.data;
            console.log(this.applyModel.applyModelForm)
          },
          (error) => {
            this.applyModel.applyModelForm = error.error;
        })  
    })
  }
  
openUploadCv(){
    const modal =  this.modalService.open(
        ModalUploadCvComponent, {size:'lg'});
    modal.componentInstance.file = this.applyModel.applyModelForm.controls['jobseekerResume'];
    modal.componentInstance.onUpload = () => {this.onUpload()}
}

// OnClick of button Upload
onUpload() {
  this.applyModel.applyModelForm.controls['jobseekerId'].setValue(203);
  console.log(this.applyModel.applyModelForm.value)
    this.uploadCvService.upload(this.applyModel.applyModelForm.value).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {
            }
        }
    );
}
}
