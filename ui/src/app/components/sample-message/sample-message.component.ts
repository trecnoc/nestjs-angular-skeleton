import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sample } from '../../models/sample.interface';
import { SampleMessageService } from '../../services/sample-message.service';

@Component({
  selector: 'app-sample-message',
  templateUrl: './sample-message.component.html',
  styleUrls: ['./sample-message.component.scss']
})
export class SampleMessageComponent implements OnInit {

  public sample$: Observable<Sample>;

  constructor(
    private readonly sampleMessageService: SampleMessageService,
  ) { }

  ngOnInit() {
    this.sample$ = this.sampleMessageService.getMessage();
  }

}
