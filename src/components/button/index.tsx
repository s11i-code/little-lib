import { Button as AriaButton } from 'react-aria-components';
import { ComponentProps, ReactNode } from 'react';
import styles from './button.module.css';

export type ButtonSize = 'small' | 'medium';
export type ButtonVariant = 'contained' | 'outlined';
export type ButtonTheme = 'primary' | 'secondary';

export interface ButtonProps {
  onPress?: () => void;
  children?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  disabled?: boolean;
  type?: ComponentProps<typeof AriaButton>['type'];
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = ({
  children,
  size = 'medium',
  variant = 'contained',
  theme = 'primary',
  disabled: disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  onPress,
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    styles[`theme-${theme}`],
  ].filter(Boolean).join(' ');

  return (
    <AriaButton
      {...props}
      type={type}
      isDisabled={disabled}
      onPress={onPress}
      className={buttonClasses}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </AriaButton>
  );
};
