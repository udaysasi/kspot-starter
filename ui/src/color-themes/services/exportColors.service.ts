import { Injectable } from "@angular/core";
import { FuseConfigService } from "@fuse/services/config";
import { FuseMediaWatcherService } from "@fuse/services/media-watcher";
import { map, takeUntil, combineLatest } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ExportColorsService {
    private cssVariablesMap: Map<string, string> = new Map();
    theme: any = 'light';

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
    ) {
        this.setCSSVariablesByClassFromLocalStorage()
    }

    // Function to get all CSS variables for the current body class (either dark or light)
    private fetchCSSVariablesFromBodyClass(bodyClass: string): void {
        const bodyElement = document.querySelector(`body.${bodyClass}`) as HTMLElement;
        if (!bodyElement) {
            console.error('Body element with the specified class not found!');
            return;
        }
          let styles : any;
        setTimeout(() => {
            styles = getComputedStyle(document.querySelector(`body.dark`) as HTMLElement)
            // console.log('styles', styles);
        }, 4000);
      
        // this.cssVariablesMap.clear();
        for (let i = 0; i < styles?.length; i++) {
            const property = styles[i];

            // Check if the property is a CSS variable (starts with '--')
            if (property.startsWith('--')) {
                const value = styles.getPropertyValue(property).trim();
                this.cssVariablesMap.set(property, value); // Map variable name to its value
            }
        }
        // console.log('this.cssVariablesMap', this.cssVariablesMap);

    }

    // Function to get the value of a specific CSS variable by its name (e.g., --success-500)
    value(variableName: string): string | null {
        if (this.cssVariablesMap.size === 0) {
            console.warn('CSS variables map is empty. Fetch variables first.');
            return null;
        }
        // console.log('this.cssVariablesMap', this.cssVariablesMap)
        return this.cssVariablesMap.get(variableName) || null;
    }

    // Function to set and fetch CSS variables based on body class (dark or light)
    setCSSVariablesByClassFromLocalStorage(): void {
        combineLatest([
            this._fuseConfigService.config$,
            this._fuseMediaWatcherService.onMediaQueryChange$([
                '(prefers-color-scheme: dark)',
                '(prefers-color-scheme: light)',
            ]),
        ])
            .pipe(
                map(([config, mql]) => {
                    const options = {
                        scheme: config.scheme,
                        theme: config.theme,
                    };
                    console.log('scheme', config.scheme);
                    if (config.scheme === 'auto') {
                        options.scheme = mql.breakpoints[
                            '(prefers-color-scheme: dark)'
                        ]
                            ? 'dark'
                            : 'light';
                    }

                    return options;
                })
            )
            .subscribe((options) => {
                this.theme = options.scheme;
            });
        // console.log('this.theme', this.theme);
        this.fetchCSSVariablesFromBodyClass(this.theme);
    }
}
