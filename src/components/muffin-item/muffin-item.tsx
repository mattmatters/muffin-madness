import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'muffin-item',
    styleUrl: 'muffin-item.scss'
})
export class MuffinItem {

    @Prop() name: string;

    render() {
        return (
            <div class="muffin-item { this.name } grow">
                <h3 class="muffin-item__name">{ this.name }</h3>
            </div>
        );
    }
}
