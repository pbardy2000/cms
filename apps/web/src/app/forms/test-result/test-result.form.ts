import { Component } from "@angular/core";
import { BaseForm } from "../base-form/base-form.form";

@Component({
  selector: 'app-test-result-form',
  templateUrl: './test-result.form.html',
  imports: [],
  providers: [
    
  ]
})
export class TestResultForm extends BaseForm {
  override form = this.fb.group({
    
  });
}