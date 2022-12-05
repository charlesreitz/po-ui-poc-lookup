import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public formInspecao = this.formBuildInspecaoProcesso();

  constructor(private formBuilder: FormBuilder) {}

  formBuildInspecaoProcesso() {
    const form = this.formBuilder.group({
      operadores: [null],
    });

    return form;
  }

  async salvar() {
    console.log(this.formInspecao);
  }
}
