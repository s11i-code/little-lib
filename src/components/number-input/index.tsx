import {
  Group,
  Input,
  Label,
  NumberField
} from 'react-aria-components';
import { Button } from "../button";
import { ComponentProps } from 'react';
import styles from './number-input.module.css';

interface NumberInputProps extends ComponentProps<typeof NumberField> {}

export function NumberInput (props: NumberInputProps) {
	

	return (
		<NumberField  {...props}>
    <Group>
      <Button theme="secondary" size="small" slot="decrement">-</Button>
      <Input />
      <Button  theme="secondary" size="small" slot="increment">+</Button>
    </Group>
  </NumberField>
	);
};

