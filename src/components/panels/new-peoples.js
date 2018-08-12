import BaseComponent from '../_base';
import ImgBack from '../../assets/images/people-panel.png';
import ImgUnknownPeople from '../../assets/images/unknown-people.png';
import { Images } from '../../loaders/images';

export default class NewPeoplesPanel extends BaseComponent {

	constructor() {
		super();
		const back = new PIXI.Sprite(Images[ImgBack]);
		back.anchor.set(1, 1);
		this.container.addChild(back);
		const people = new PIXI.Sprite(Images[ImgUnknownPeople]);
		people.anchor.set(0.5, 1);
		people.x = -back.width + people.width / 2;
		this.container.addChild(people);
		let peoplesCount = 0;
		const peoplesCountText = new PIXI.Text(peoplesCount.toString());
		peoplesCountText.anchor.set(0.5, 0.5);
		peoplesCountText.x = (people.x + people.width / 2) / 2;
		peoplesCountText.y = -back.height / 2;
		this.container.addChild(peoplesCountText);
	}

}
