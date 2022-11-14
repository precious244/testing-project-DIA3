import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  baseApiUrl = `${environment.apiUrl}/api/v1/jobseeker/user/update/resume`
    
  constructor(private http:HttpClient) { }
  
  upload(body: any):Observable<any> {
      const formData = new FormData(); 
      formData.append("jobseekerId", body.jobseekerId);
      formData.append("jobseekerResume", body.jobseekerResume);
      return this.http.post(this.baseApiUrl, formData)
    }
  }
