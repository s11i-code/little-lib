import {
	Slider as AriaSlider,
	SliderOutput,
	SliderThumb,
	SliderTrack,
} from "react-aria-components";
import styles from "./Slider.module.css";
import { ComponentProps } from "react";

interface SliderProps extends ComponentProps<typeof AriaSlider> {
	className?: never;
}

export function Slider(props: SliderProps) {

  const hasValue = props.value !== undefined && !Number.isNaN(props.value)
	
  return (
		<AriaSlider
			{...props}
      value={hasValue ? props.value : 0}
			className={styles.slider}
		>
			{ hasValue && <SliderOutput /> }
			<SliderTrack className={styles.track}>
				<SliderThumb className={styles.thumb} />
			</SliderTrack>
		</AriaSlider>
	);
}
