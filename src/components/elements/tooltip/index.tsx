import { useState } from "react";

interface ITooltip {
	children: React.ReactNode;
	text: string,
	width?: 'w-44' | 'w-56' | 'w-32' | 'w-28' | 'w-20';
}

const Tooltip: React.FC<ITooltip> = ({ width, children, text }) => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<div className="relative">
			<div
				className={`bg-white ${width || ' w-20'} ${visible ? 'visible opacity-100' : 'invisible opacity-0'} transition-all text-center rounded-lg p-1 absolute z-10`}
				style={{ top: '-40px' }}
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