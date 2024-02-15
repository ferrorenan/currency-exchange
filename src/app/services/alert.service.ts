import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alert = Swal.mixin({
    showConfirmButton: false,
    showCloseButton: false
  });

  constructor(
      private _router: Router
  ) { }

  showFeedbackClient(
      title: string,
      message: string,
      typeAlert?: SweetAlertIcon
  ): void {
    this.alert.fire(title, message, typeAlert);
  }

  closeAlert(): void {
    this.alert.close();
  }
}
