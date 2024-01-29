import { FormGroup, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(ctrl1: string, ctrl2: string): ValidatorFn {
  return (control) => {
    const passGroup = control as FormGroup;
    const passCtrl1 = passGroup.get(ctrl1);
    const passCtrl2 = passGroup.get(ctrl2);
    return passCtrl1?.value === passCtrl2?.value ? null : {passwordMatchValidator: true}
  };
}
