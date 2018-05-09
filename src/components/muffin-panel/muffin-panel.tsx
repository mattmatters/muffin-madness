import { Component } from '@stencil/core';


@Component({
    tag: 'muffin-panel',
    styleUrl: 'muffin-panel.scss'
})
export class MuffinPanel {
    render() {
        return (
            <section>
                <ul class="muffin-panel__list">
                    <li class="muffin-item__list-item">
                        <div class="muffin-item blueberry grow">
                            <h3 class="muffin-item__name">Blueberry</h3>
                        </div>
                    </li>
                    <li class="muffin-item__list-item">
                        <div class="muffin-item chocolate grow">
                            <h3 class="muffin-item__name">Chocolate Chip</h3>
                        </div>
                    </li>
                    <li class="muffin-item__list-item">
                        <div class="muffin-item poppyseed grow">
                            <h3 class="muffin-item__name">Poppy Seed</h3>
                        </div>
                    </li>
                    <li class="muffin-item__list-item">
                        <div class="muffin-item pumpkin grow">
                            <h3 class="muffin-item__name">Pumpkin</h3>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}
