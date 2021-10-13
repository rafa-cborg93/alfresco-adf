import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
    host: { class: 'adf-layout-header' }
})
export class HeaderComponent implements OnInit {
  
  @Input() title: string;

    /** Path to an image file for the application logo. */
    @Input() logo: string;

    /** The router link for the application logo, when clicked. */
    @Input() redirectUrl: string | any[] = '/';

    /** The tooltip text for the application logo. */
    @Input() tooltip: string;

    /**
     * Background color for the header. It can be any hex color code or one
     * of the Material theme colors: 'primary', 'accent' or 'warn'.
     */
    @Input() color: ThemePalette;

    /**
     * Toggles whether the sidenav button will be displayed in the header
     * or not.
     */
    @Input() showSidenavToggle: boolean = true;

    /** Emitted when the sidenav button is clicked. */
    @Output() clicked = new EventEmitter<boolean>();

    /** expandedSidenav: Toggles the expanded state of the component. */
    @Input() expandedSidenav: boolean = true;

    /** The side of the page that the drawer is attached to (can be 'start' or 'end') */
    @Input() position = 'start';

    toggleMenu() {
        this.clicked.emit(true);
        this.expandedSidenav = !this.expandedSidenav;
    }

    ngOnInit() {
        if (!this.logo) {
            this.logo = '../../../assets/img/logo-c2a.png';
        }
    }

}
