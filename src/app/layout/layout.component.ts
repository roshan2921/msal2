import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MsalService } from '@azure/msal-angular';
import { CallapiService } from '../callapi.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentAccount: any;
  isLoading: boolean = true;
  profilePicture?: SafeResourceUrl;
  userDetails: any;

  constructor(private _authService: MsalService,
    private _http: HttpClient, private _domsanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getProfile();
    this.getProfilePicture();
  }

  logout() {
    this._authService.logout()
  }

  getProfile() {
    this._http.get("https://graph.microsoft.com/v1.0/me").subscribe(resp => {
      this.userDetails = resp;
      // console.log(this.userDetails);
    })
  }

  getProfilePicture() {
    this._http.get("https://graph.microsoft.com/v1.0/me/photo/$value", { responseType: 'blob' }).subscribe(resp => {
      var UrlCreator = window.URL || window.webkitURL
      this.profilePicture = this._domsanitizer.bypassSecurityTrustResourceUrl(UrlCreator.createObjectURL(resp));
    })
  }

}
