import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-face-reader',
  templateUrl: './face-reader.component.html',
  styleUrls: ['./face-reader.component.css']
})
export class FaceReaderComponent implements OnInit {
    private destroy$: Subject<boolean> = new Subject<boolean>();
    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: any; // Variable to store file
  errorMessage: any;
  
    // Inject service 
    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onChange(event:any) {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        debugger
        this.fileUploadService.upload(this.file)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (data:any) => {
                   // Short link via api response
                   debugger
                   this.shortLink = data;
                   this.loading = false; // Flag variable
            },
          (error) => {
            this.errorMessage = 'Error while adding WFH Days';
          }
        );

/*  
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable
                }
            }
        );
*/
    }
}
