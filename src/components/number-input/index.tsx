import { useRef, useState } from 'react';
import { Button } from '../button';
import styles from './number-input.module.css';

export interface NumberInputProps {
  /** The value of the input */
  value: number | undefined;
  /** The minimum value allowed */
  min?: number;
  /** The maximum value allowed */
  max?: number;
  /** The step value for increment/decrement */
  step?: number;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Callback when the value changes */
  onChange?: (value: number | undefined) => void;
  /** Additional CSS class name */
  className?: string;
}

export const NumberInput = ({
  value ,
  min = -Infinity,
  max = Infinity,
  step = 1,
  disabled = false,
  onChange,
  className,
}: NumberInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const valueWithDefault = value ?? 0;

  const handleIncrement = () => {
    const newValue = Math.min(valueWithDefault + step, max);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(valueWithDefault - step, min);
    onChange?.(newValue);
  };

  const handleInputChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    if (value === '') {
      onChange?.(undefined);
    }
    const newValue = parseFloat(value);
    if (!isNaN(newValue)) {
      const clampedValue = Math.min(Math.max(newValue, min), max);
      onChange?.(clampedValue);
    }
  };

  const containerClasses = [
    styles.container,
    isFocused && styles.focused,
  disabled && styles.disabled,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <Button
        theme="secondary"
        disabled={disabled || valueWithDefault <= min}
        onPress={handleDecrement}
      >
        -
      </Button>
      <input
        ref={inputRef}
        type="number"
        value={value ?? ''}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles.input}
      />
      <Button
        theme="secondary"
        disabled={disabled || valueWithDefault >= max}
        onPress={handleIncrement}
      >
        +
      </Button>
    </div>
  );
}; 