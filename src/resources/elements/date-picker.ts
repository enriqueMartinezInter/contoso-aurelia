import {autoinject, customElement, bindable, bindingMode} from 'aurelia-framework';
import * as Flatpickr from 'flatpickr';
import * as moment from 'moment';

@autoinject()
@customElement('date-picker')
export class DatePickerCustomElement {
   @bindable({defaultBindingMode: bindingMode.twoWay}) value;
   @bindable({defaultBindingMode: bindingMode.twoWay}) options;

   fpInstance;
   element: Element;
  
  constructor(element: Element) {
    this.element = element;
  }

  optionsChanged(newValue, oldValue) {
    if (this.fpInstance) {
      this.fpInstance.config(newValue);
    }
  }

  attached() { 
    this.fpInstance = new Flatpickr(this.element, {
      defaultDate: this.value,
      dateFormat: 'd-m-Y',
      onChange: (selectedDates, dateStr, instance) => this.value = moment(selectedDates[0]).format('DD-MM-YYYY')
    });
  }

  detached() {
    this.fpInstance.destroy();
  }

}

