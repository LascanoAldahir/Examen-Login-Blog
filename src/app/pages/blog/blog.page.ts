import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  posts$: Observable<any[]>;
  newPostContent: string = '';
  selectedFile: File | null = null;
  @ViewChild('fileInput') fileInput!: ElementRef;

  googleMapsApiKey = 'AIzaSyBKqnwwxl71UiL-SabxEtgzi5N0P3g_tTI';

  constructor(private blogService: BlogService, private storage: AngularFireStorage, private http: HttpClient) { }

  ngOnInit() {
    this.posts$ = this.blogService.getPosts();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('File selected:', this.selectedFile);
  }

  async addPost() {
    let uploadUrl = '';
    let fileType = '';

    if (this.selectedFile) {
      const filePath = `posts/${new Date().getTime()}_${this.selectedFile.name}`;
      uploadUrl = await this.blogService.uploadFile(filePath, this.selectedFile);
      fileType = this.selectedFile.type;
      console.log('Upload URL:', uploadUrl);
    }

    await this.blogService.addPost(this.newPostContent, uploadUrl, fileType, null);
    this.newPostContent = '';
    this.selectedFile = null;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C${latitude},${longitude}&key=${this.googleMapsApiKey}`;
        
        console.log('Generated Image URL:', imageUrl);

        this.http.get(imageUrl, { responseType: 'blob' }).subscribe((blob) => {
          console.log('Blob received:', blob);
          const file = new File([blob], `location_${latitude}_${longitude}.png`, { type: 'image/png' });
          this.uploadFileFromBlob(file, `location_images/${file.name}`, latitude, longitude);
        });
      }, (error) => {
        console.error('Error obtaining location', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  private uploadFileFromBlob(file: File, path: string, latitude: number, longitude: number) {
    const fileRef = this.storage.ref(path);
    const task = this.storage.upload(path, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          console.log('Download URL:', downloadURL);
          this.blogService.addPost(this.newPostContent, downloadURL, 'image/png', { lat: latitude, lng: longitude });
          this.newPostContent = '';
          this.selectedFile = null;
        });
      })
    ).subscribe({
      next: (snapshot: any) => {
        if (snapshot) {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        }
      },
      error: err => {
        console.error('Error uploading file', err);
      }
    });
  }
}
