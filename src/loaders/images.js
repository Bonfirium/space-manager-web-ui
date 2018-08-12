import * as PIXI from 'pixi.js';
import BaseLoader from './_base';
import InventoryPanel from '../assets/images/inventory-panel.png';
import PeoplePanel from '../assets/images/people-panel.png';
import UnknownPeople from '../assets/images/unknown-people.png';

/**
 *  ## USAGE
 * `import Images from './loaders/image';`
 * `import SomeImage from './assets/images/someImage.png';`
 * `new Sprite(Images[SomeImage]);`
 * @type {Object.<String, PIXI.Texture>}
 */
export const Images = {};

export default class ImagesLoader extends BaseLoader {

	constructor() {
		super();
		this.imagesToLoad = [
			InventoryPanel,
			PeoplePanel,
			UnknownPeople,
		];
		this.imagesToLoad.forEach((image) => {
			// resource id is a same as path to this image
			PIXI.loader.add(image, image);
		});
	}

	/** @inheritDoc BaseLoader#onLoad */
	onLoad(_, resources) {
		this.imagesToLoad.forEach((image) => {
			Images[image] = resources[image].texture;
		});
	}

}
