import { Component } from '@angular/core';
import { EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import {OnChanges,SimpleChanges,ViewEncapsulation} from '@angular/core';

export interface NumberedPaginatorChange {
  pageIndex: number;  // 0-based
  pageSize: number;
  length: number;     // total items
}


@Component({
  selector: 'fury-numbered-paginator',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './numbered-paginator.component.html',
  styleUrl: './numbered-paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NumberedPaginatorComponent {

 @Input() length = 0; // total items
    @Input() pageSize = 12; // items per page
    @Input() pageIndex = 0; // zero-based current page
    @Input() windowSize = 5; // number of visible page buttons (prefer odd)
    @Input() showFirstLastButtons = true;

    @Output() page = new EventEmitter<NumberedPaginatorChange>();

    get totalPages(): number {
        return this.pageSize > 0 ? Math.max(1, Math.ceil(this.length / this.pageSize)) : 1;
    }
    get lastPageIndex(): number {
        return this.totalPages - 1;
    }

    /** Sliding window centered on current page (as much as possible) */
    get windowPages(): number[] {
        const total = this.totalPages;
        if (total === 0) return [];
        const size = Math.min(this.windowSize, total);
        const half = Math.floor(size / 2);

        let start = this.pageIndex - half;
        let end = this.pageIndex + half;

        // Clamp to bounds and shift window to preserve size
        if (start < 0) {
            end += -start;
            start = 0;
        }
        if (end > this.lastPageIndex) {
            start -= end - this.lastPageIndex;
            end = this.lastPageIndex;
        }
        start = Math.max(0, start);

        // Ensure exact size where possible
        const actual = end - start + 1;
        if (actual < size) {
            // expand right or left if room
            const need = size - actual;
            end = Math.min(this.lastPageIndex, end + need);
            start = Math.max(0, end - size + 1);
        }

        const out: number[] = [];
        for (let i = start; i <= end; i++) out.push(i);
        return out;
    }

    get windowStart(): number {
        const w = this.windowPages;
        return w.length ? w[0] : 0;
    }
    get windowEnd(): number {
        const w = this.windowPages;
        return w.length ? w[w.length - 1] : 0;
    }

    get showFirst(): boolean {
        return this.windowStart > 0;
    }
    get showLeftEllipsis(): boolean {
        return this.windowStart > 1;
    } // gap >= 1 between 1 and start
    get showLast(): boolean {
        return this.windowEnd < this.lastPageIndex;
    }
    get showRightEllipsis(): boolean {
        return this.windowEnd < this.lastPageIndex - 1;
    } // gap >= 1 between end and last

    get leftEllipsisPages(): number[] {
        if (!this.showLeftEllipsis) return [];
        return this.range(1, this.windowStart - 1); // after first, before window start
    }
    get rightEllipsisPages(): number[] {
        if (!this.showRightEllipsis) return [];
        return this.range(this.windowEnd + 1, this.lastPageIndex - 1); // after window end, before last
    }

    /** Left gap (between first page and start of window) */
    get hasLeftGap(): boolean {
        const w = this.windowPages;
        return w.length && w[0] > 0;
    }
    /** Right gap (between end of window and last page) */
    get hasRightGap(): boolean {
        const w = this.windowPages;
        return w.length && w[w.length - 1] < this.lastPageIndex;
    }

    private range(a: number, b: number): number[] {
        if (b < a) return [];
        return Array.from({ length: b - a + 1 }, (_, i) => a + i);
    }

    goTo(index: number) {
        if (index < 0 || index > this.lastPageIndex || index === this.pageIndex) return;
        this.pageIndex = index;
        this.emit();
    }
    prev() {
        if (this.pageIndex > 0) {
            this.pageIndex--;
            this.emit();
        }
    }
    next() {
        if (this.pageIndex < this.lastPageIndex) {
            this.pageIndex++;
            this.emit();
        }
    }
    first() {
        if (this.pageIndex !== 0) {
            this.pageIndex = 0;
            this.emit();
        }
    }
    last() {
        if (this.pageIndex !== this.lastPageIndex) {
            this.pageIndex = this.lastPageIndex;
            this.emit();
        }
    }

    private emit() {
        this.page.emit({ pageIndex: this.pageIndex, pageSize: this.pageSize, length: this.length });
    }
}
