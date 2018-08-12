import BaseComponent from '../_base';
import InventoryPanel from './inventory-panel';
import NewPeoplesPanel from './new-peoples';

export default class InGamePanel extends BaseComponent {

	constructor() {
		super();
		const inventory = new InventoryPanel();
		inventory.x = window.innerWidth / 2;
		inventory.y = window.innerHeight;
		this.container.addChild(inventory.container);
		const newPeoples = new NewPeoplesPanel();
		newPeoples.x = window.innerWidth;
		newPeoples.y = window.innerHeight;
		this.container.addChild(newPeoples.container);
	}

}
