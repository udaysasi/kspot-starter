import { AfterViewInit, Component, Optional } from '@angular/core';
import { inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnityComponent } from 'app/layout/common/unity/unity.component';
import { API_BASE_HREF } from 'app/services/base-url.service';
import { DataService, MessageIds } from 'app/services/data.service';
import { LocationService } from 'app/services/location.service';
import { Subject, takeUntil } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatCalendar } from '@angular/material/datepicker';
import { NumberedPaginatorComponent, NumberedPaginatorChange } from '../shared/numbered-paginator/numbered-paginator.component';
import { CommonModule } from '@angular/common';
import { ExportColorsService } from 'color-themes/services/exportColors.service';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, MatButtonModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule, NumberedPaginatorComponent],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit , AfterViewInit {


  isLoading: boolean = false;
  isModelLoaded: boolean = false;

  constructor(private sb: MatSnackBar, private _snackBar: DataService , private _color: ExportColorsService) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.colorfromTs();
  }



  openSnack(type: 'success' | 'warning' | 'error' | 'info'): void {
    this._snackBar.changeMessage({
      id: MessageIds.CUSTOM_SNACKBAR,
      data: {
        type: type,
        message: "Error in Creating Guest",
        title: type,
      },
    })
  }
  colorfromTs(){
    const container = document.getElementById('colorFromTs');
    // console.log("this._color.value('--primary-500')", this._color.value('--primary-500'));
    // container.style.backgroundColor = this._color.value('--primary-500');
  }

  // Configure your paginator
  totalItems = 50;     // <-- set this to your real total
  pageSize = 10;
  pageIndex = 0;
  private prevIndex = 0;

  lastOutputEvent:
    | { previousPageIndex: number; pageIndex: number; pageSize: number; length: number }
    | null = null;

  onPage(e: { pageIndex: number; pageSize: number; length: number }) {
    const out = {
      previousPageIndex: this.prevIndex,
      pageIndex: e.pageIndex,
      pageSize: e.pageSize,
      length: e.length,
    };
    this.prevIndex = e.pageIndex;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize ?? this.pageSize;

    this.lastOutputEvent = out;
    console.log('Output event:', out);
  }


}
