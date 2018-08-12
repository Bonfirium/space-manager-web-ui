import * as PIXI from 'pixi.js';
import BaseComponent from '../_base';

export default class OfficePresenter extends BaseComponent {

	constructor(width, height) {
		super();
		this._width = width;
		this._height = height;
		const graphics = new PIXI.Graphics();
		graphics.lineStyle(32, 0x303030);
		graphics.beginFill(0xa0a0a0);
		graphics.drawRect(-this._width / 2, -this._height / 2, this._width, this._height);
		this.container.addChild(graphics);
	}

}
