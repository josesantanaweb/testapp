import React from 'react';
import classNames from "classnames";

// Types
export interface ButtonProps {
  className?: string;
  variant?: string;
  label: string;
  disabled?: boolean
}

const Button:React.FC<ButtonProps> = ({className, label, disabled, variant, ...props}) => {
	const buttonClass = classNames({
		"button": true,
		[`button-${variant}`]: true,
		[`${className}`]: className,
		disabled: disabled,
	});

	return (
		<button className={buttonClass} {...props}>
			{label}
		</button>
	);
};

export default Button;
