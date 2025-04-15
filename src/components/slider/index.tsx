import { ComponentProps } from "react";
import {
	Slider as AriaSlider,
	SliderOutput,
	SliderThumb,
	SliderTrack,
} from "react-aria-components";
import styles from "./Slider.module.css";

interface SliderProps extends ComponentProps<typeof AriaSlider> {
	className?: never;
	label?: string;
	showOutput?: boolean;
}

export function Slider(props: SliderProps) {
	const hasValue = props.value !== undefined && !Number.isNaN(props.value);

	return (
		<AriaSlider
			{...props}
			value={hasValue ? props.value : 0}
			className={styles.slider}
		>
			{hasValue && props.showOutput && <SliderOutput />}
			<SliderTrack className={styles.track}>
				<SliderThumb className={styles.thumb} />
			</SliderTrack>
		</AriaSlider>
	);
}
