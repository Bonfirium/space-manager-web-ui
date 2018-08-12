import * as PIXI from 'pixi.js';
import loadResources from './loaders';
import ImgInventoryPanel from './assets/images/inventory-panel.png';
import { Images } from './loaders/images';

// noinspection JSValidateTypes
/** @type {PIXI.Application} */
const app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

(async () => {
	await loadResources();
	const inventoryPanel = new PIXI.Sprite(Images[ImgInventoryPanel]);
	inventoryPanel.x = window.innerWidth / 2;
	inventoryPanel.y = window.innerHeight;
	inventoryPanel.anchor.set(0.5, 1);
	app.stage.addChild(inventoryPanel);
})();
