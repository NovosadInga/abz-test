import React from 'react';
import ReactTooltip from 'react-tooltip';

interface ITooltipProps {
	text: string,
	id: string
}

const Tooltip: React.FC<ITooltipProps> = ({ text, id }) => {
	return (
		<ReactTooltip
			id={id}
			className='tooltip nowrap'
			effect="solid"
			place='bottom'
			offset={{ left: -50 }}
		>
			<span>{text}</span>
		</ReactTooltip>)
};

export default Tooltip;
