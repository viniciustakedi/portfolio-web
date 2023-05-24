import { SiTailwindcss, SiTypescript, SiFramer } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Tooltip from "../elements/tooltip";

export default function Footer() {
	const handleGoTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	//Arrumar scroll horizontal no mobile

	return (
		<div className="flex items-center justify-center flex-col bg-dark-blue lg:py-10 lg:px-10 md:py-10 md:px-10 px-2 py-8 w-full">
			<div className="flex items-center justify-center w-full mb-4 lg:justify-between md:justify-between">
				<div className="flex items-center lg:flex-row md:flex-row flex-col md:gap-4 lg:gap-4 gap-0">
					<h1 className="font-bold text-2xl">Takedi</h1>
					<h1 className="text-soft-blue font-bold lg:flex md:flex hidden">|</h1>
					<h1 className="text-blue font-medium text-lg">Engenheiro de Software Full-Stack</h1>
				</div>
				<IoIosArrowDropupCircle
					className="cursor-pointer text-blue hover:text-white transition-all lg:flex md:flex hidden"
					size={28}
					onClick={handleGoTop}
				/>
			</div>
			<h1 className="font-medium text-lg mb-3 text-blue">Feito com ❤️ utilizando:</h1>
			<div className="flex items-center gap-4">
				<Tooltip text="NextJs">
					<TbBrandNextjs className="text-blue hover:text-white transition-all" size={34} />
				</Tooltip>
				<Tooltip text="Typescript">
					<SiTypescript className="text-blue hover:text-white transition-all" size={26} />
				</Tooltip>
				<Tooltip text="TailwindCss">
					<SiTailwindcss className="text-blue hover:text-white transition-all" size={32} />
				</Tooltip>
				<Tooltip text="Framer Motion">
					<SiFramer className="text-blue hover:text-white transition-all" size={26} />
				</Tooltip>
			</div>
		</div>
	);
}