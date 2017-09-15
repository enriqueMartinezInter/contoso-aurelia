import { autoinject } from 'aurelia-framework';

@autoinject()
export class Prompt {

  person = { firstName: '' };

  constructor() {}

  activate(person){
    this.person = person;
  }
}

