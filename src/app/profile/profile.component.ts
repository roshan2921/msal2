import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ariqt-ui-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor() { }
  @Input() userDetails!: any;
  @Input() profilePicture!: SafeResourceUrl | undefined;
  ngOnInit(): void {
  }
}
