import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { ApplyModel } from '../apply/model/apply.model';

@Component({
  selector: 'app-application-success',
  templateUrl: './application-success.component.html',
  styleUrls: ['./application-success.component.scss']
})
export class ApplicationSuccessComponent implements OnInit {
  
  applyModel = new ApplyModel();
  jobName: any;
  recruiterCompany: any;

  constructor(
    public readonly jobService: JobService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
          jobStatus: "visible"
        }
        console.log(data.params)
        this.jobService.getDetailJob(params).subscribe(
          (response: any) => {
            this.applyModel.applyModelForm.patchValue(response.data); 
            console.log(response.data)

          },
          (error) => {
    })
  }
)
}
}
