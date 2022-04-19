import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

// Types
export interface LangSelectorProps {}

const LangSelector:React.FC<LangSelectorProps> = () => {
	return (
		<div className="lang">
			<p className="lang-label">EN</p>
			<span className="lang-icon">
				<BiChevronDown size={14}/>
			</span>
		</div>
	);
};

export default LangSelector;
