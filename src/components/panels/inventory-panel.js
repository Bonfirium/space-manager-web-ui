import * as PIXI from 'pixi.js';
import ImgInventoryPanel from '../../assets/images/inventory-panel.png';
import { Images } from '../../loaders/images';
import BaseComponent from '../_base';

export default class InventoryPanel extends BaseComponent {

	constructor() {
		super(new PIXI.Container());
		const inventoryPanel = new PIXI.Sprite(Images[ImgInventoryPanel]);
		inventoryPanel.anchor.set(0.5, 1);
		this.container.addChild(inventoryPanel);
	}

}
