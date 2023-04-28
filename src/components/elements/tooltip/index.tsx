import { useState } from "react";

interface ITooltip {
	children: React.ReactNode;
	text: string,
	width?: 'w-44' | 'w-56' | 'w-32' | 'w-28' | 'w-20';
	position?: 'top' | 'bottom' | 'left' | 'right';
	top?: string;
	left?: string;
}

const Tooltip: React.FC<ITooltip> = ({ width, children, text, position, top, left }) => {
	const [visible, setVisible] = useState<boolean>(false);

	let positionData: { top: string, left: string } = { top: '-40px', left: '0' };

	if (position === 'bottom') positionData = { top: top || '40px', left: left || '0' };
	else if (position === 'left') positionData = { top: top || '0', left: left || '-85px' };
	else if (position === 'right') positionData = { top: top || '0', left: left || '40px' };

	return (
		<div className="relative">
			<div
				className={`bg-white ${width || ' w-20'} ${visible ? 'visible opacity-100' : 'invisible opacity-0'} transition-all delay-75 text-center rounded-lg p-1 absolute z-10`}
				style={positionData}
			>
				<p className="font-medium text-dark-blue text-sm">
					{text}
				</p>
			</div>
			<div
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
			>
				{children}
			</div>
		</div>
	);
}

export default Tooltip