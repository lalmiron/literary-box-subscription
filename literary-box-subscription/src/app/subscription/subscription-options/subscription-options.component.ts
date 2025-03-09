import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subscription-options',
  templateUrl: './subscription-options.component.html',
  styleUrls: ['./subscription-options.component.css']
})
export class SubscriptionOptionsComponent {
  @Output() nextStep = new EventEmitter<void>();

  selectSubscription(option: string) {
    console.log('Selected:', option);
    this.nextStep.emit();
  }
}
