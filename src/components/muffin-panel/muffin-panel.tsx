import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'muffin-panel',
    styleUrl: 'muffin-panel.scss'
})
export class MuffinPanel {
    render() {
        return (
            <section>
                <ul class="muffin-panel__list">
                    <li class="muffin-item__list-item"><muffin-item name="Chocolate Chip" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Blueberry" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Poppy Seed" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Cornbread" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Pumpkin" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Rasberry" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Pistachio" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Blackberry" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Orange" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Walnut" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Hell" /></li>
                    <li class="muffin-item__list-item"><muffin-item name="Almond" /></li>
                </ul>
            </section>
        );
    }
}
