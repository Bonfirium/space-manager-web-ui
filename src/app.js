import * as PIXI from 'pixi.js';
import loadResources from './loaders';

// noinspection JSValidateTypes
/** @type {PIXI.Application} */
const app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

(async () => {
	await loadResources();
})();
