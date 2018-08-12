import * as PIXI from 'pixi.js';
import loadResources from './loaders';
import InGamePanel from './components/panels/in-game';
import OfficePresenter from './components/presenters/office';

// noinspection JSValidateTypes
/** @type {PIXI.Application} */
const app = new PIXI.Application(window.innerWidth, window.innerHeight);
app.renderer.backgroundColor = 0x484848;
document.body.appendChild(app.view);

(async () => {
	await loadResources();
	const inGamePanel = new InGamePanel();
	app.stage.addChild(inGamePanel.container);
	const officePresenter = new OfficePresenter(window.innerWidth - 256, window.innerHeight - 96 - 256);
	officePresenter.x = window.innerWidth / 2;
	officePresenter.y = (window.innerHeight - 96) / 2;
	app.stage.addChild(officePresenter.container);
})();
