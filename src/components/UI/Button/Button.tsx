import React from 'react';

export interface IButtonProps {
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	text: string;
	classes?: string;
	onClick?: () => void;
}
const Button: React.FC<IButtonProps> = ({
	type = "button",
	disabled = false,
	text,
	classes,
	onClick
}: IButtonProps) => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			className={`button ${classes ? classes : ''}`}
		>
			{text}
		</button>
	);
}
export default Button
