export { motion } from 'framer-motion';

type TitleVariantsType = {
	delay?: number;
}

export const titleVariants = (props?: TitleVariantsType) => {
	const { delay } = props || {};

	return {
		hidden: {
			scale: .8,
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: delay || .4,
			}
		},
	}
}

type UpPositionVariantsType = {
	delay?: number;
}

export const upPositionVariants = (props?: UpPositionVariantsType) => {
	const { delay } = props || {};
	
	return {
		hidden: {
			scale: .8,
			opacity: 0,
			y: 30,
		},
		visible: {
			scale: 1,
			opacity: 1,
			y: 0,
			transition: {
				delay: delay || .4,
			}
		},
	}
}