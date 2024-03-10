import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

/**
 * Component responsible for displaying the home page.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
 
  /**
   * Constructs the HomeComponent.
   * @param productService The product service.
   * @param purchaseHistoryService The purchase history service.
   */
  constructor(
  ) {}

  /** Initializes the component. */
  ngOnInit(): void {



    // Call the function to handle window resize
    this.handleWindowResize(); 
    this.asideWidthSetter();
  }

  /**
   * Sets the width of the aside panel dynamically based on its content.
   */
  asideWidthSetter() {
    const component2 = document.getElementById("aside-w-home");
    const asideWidthTaker2 = component2 ? component2.offsetWidth : null;
    document.documentElement.style.setProperty('--aside-width-home-from-drawer', asideWidthTaker2 + "px");
  }



  
  
  @HostListener('window:resize', ['$event'])
  handleWindowResize(event?: any) {
    const asideTab = document.querySelector('.aside-tab');
    const rightSideCards = document.querySelector('.cards-first');
    if (window.innerWidth <= 1530) {
      //change css on width change
      rightSideCards?.classList.add('right-side-cards');
      // Hide the div when width is 1539 or less
      asideTab?.classList.add('hidden');
    } else {
      // Show the div when width is more than 1539
      asideTab?.classList.remove('hidden');
      rightSideCards?.classList.remove('right-side-cards');
    }
  }

  /** Cleans up subscriptions when the component is destroyed */
  ngOnDestroy() {
  }
}