import { AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
export function cannotHaveSameValue(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (control instanceof FormArray) {
            const controlList = []; // dymanic programming
            const controls = (control as FormArray).controls;
            controls.forEach(c => {
                if (c.value !== '') {
                    if (controlList.includes(c.value)) {
                        return;
                    }
                    controls
                    .filter(fc => c !== fc)
                    .forEach(c2 => { if (c2.value === c.value && !controlList.includes(c.value)) { controlList.push(c.value); } });
                }
            });
            return (controlList.length > 0) ? { samevalue: { value: controlList.join(',') } } : null;
        }
    };
}
