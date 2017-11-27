import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'app-container',
    styleUrl: 'app.scss'
})
export class App {
    render() {
        return (
            <div>
                <h1 class="app__header">Muffin Madness</h1>
                <h2 class="app__header">Too much muffin for mortal maladies</h2>
                <muffin-panel />
            </div>
        );
    }
}
