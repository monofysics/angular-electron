import { Component } from '@angular/core';
import { ElectronService } from './shared/providers/';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public electronService: ElectronService) {
        if (electronService.isElectron()) {
            console.log('Mode electron');
            console.log('c', electronService.ipcRenderer);
            console.log('c', electronService.childProcess);
        } else {
            console.log('Mode web');
        }
    }
}
