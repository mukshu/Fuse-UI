import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'contracts',
    templateUrl    : './contracts.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContractsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
