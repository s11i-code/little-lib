import { ComponentProps, ReactNode } from "react";
import { Button as AriaButton } from "react-aria-components";
import styles from "./button.module.css";

export type ButtonSize = "small" | "medium";
export type ButtonVariant = "contained" | "outlined";
export type ButtonTheme = "primary" | "secondary";

export interface ButtonProps extends ComponentProps<typeof AriaButton> {
	size?: ButtonSize;
	variant?: ButtonVariant;
	theme?: ButtonTheme;
	iconPosition?: "left" | "right";
	className?: never;
	children?: ReactNode;
	icon?: ReactNode;
}

export const Button = ({
	size = "medium",
	variant = "contained",
	theme = "primary",
	type = "button",
	icon,
	children,
	iconPosition = "left",
	onPress,
	...props
}: ButtonProps) => {
	const buttonClasses = [
		styles.button,
		styles[`size-${size}`],
		styles[`variant-${variant}`],
		styles[`theme-${theme}`],
	]
		.filter(Boolean)
		.join(" ");

	return (
		<AriaButton
			{...props}
			type={type}
			onPress={onPress}
			className={buttonClasses}
		>
			{icon && iconPosition === "left" && icon}
			{children}
			{icon && iconPosition === "right" && icon}
		</AriaButton>
	);
};
