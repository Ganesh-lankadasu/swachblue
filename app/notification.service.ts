import { Injectable } from '@angular/core';
   
import { ToastrService } from 'ngx-toastr';
   
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   
  constructor(private toastr: ToastrService) { }
   
  showSuccess(message){
      this.toastr.success(message)
  }
   
  showError(message){
      this.toastr.error(message)
  }
   
  showInfo(message, title){
      this.toastr.info(message, title)
  }
   
  showWarning(message, title){
      this.toastr.warning(message, title)
  }
   
}