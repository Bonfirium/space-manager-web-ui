import * as PIXI from 'pixi.js';
import loadResources from './loaders';
import GameComponent from './components/game';

// noinspection JSValidateTypes
/** @type {PIXI.Application} */
const app = new PIXI.Application(window.innerWidth, window.innerHeight);
app.renderer.backgroundColor = 0x484848;
document.body.appendChild(app.view);

(async () => {
	await loadResources();
	app.stage.addChild(new GameComponent().container);
})();
