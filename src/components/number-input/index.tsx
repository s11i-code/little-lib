import { ComponentProps } from "react";
import { Group, Input, NumberField } from "react-aria-components";
import { Button } from "../button";
import styles from "./number-input.module.css";

interface NumberInputProps extends ComponentProps<typeof NumberField> {
	className?: never;
}

export function NumberInput(props: NumberInputProps) {
	return (
		<NumberField className={styles.container} {...props}>
			<Group className={styles.group}>
				<Button theme="secondary" size="small" slot="decrement">
					-
				</Button>
				<Input className={styles.input} />
				<Button theme="secondary" size="small" slot="increment">
					+
				</Button>
			</Group>
		</NumberField>
	);
}
