import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'kloud-snackbar',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class CustomSnackbarComponent implements OnInit, OnChanges {
    @Input('data') data: any;

    constructor(private dataservice: DataService, private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {}
    ngOnChanges(changes: SimpleChanges): void {
        this.cdr.detectChanges();
        setTimeout(() => {
            this.onClose();
            this.cdr.detectChanges();
        }, 5000);
    }
    onClose() {
        this.data = null;
        this.cdr.detectChanges();
    }
    getImg(type) {
        return `color-themes/assets/huge-icons/${type}.svg`;
    }
}
