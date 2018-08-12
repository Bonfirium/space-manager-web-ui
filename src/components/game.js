import BaseComponent from './_base';
import OfficePresenter from './presenters/office';
import InGamePanel from './panels/in-game';

export default class GameComponent extends BaseComponent {

	constructor() {
		super();
		const inGamePanel = new InGamePanel();
		this.container.addChild(inGamePanel.container);
		const officePresenter = new OfficePresenter(window.innerWidth - 256, window.innerHeight - 96 - 256);
		officePresenter.x = window.innerWidth / 2;
		officePresenter.y = (window.innerHeight - 96) / 2;
		this.container.addChild(officePresenter.container);
	}

}
