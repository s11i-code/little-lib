import { Slider as AriaSlider, SliderOutput, SliderThumb, SliderTrack } from 'react-aria-components';
import styles from './Slider.module.css';


export function Slider({value, onChange}: {value: number, onChange: (value: number) => void}) {
  return (<AriaSlider  value={value}
    onChange={onChange}

    className={styles.slider} 
    defaultValue={30}>
    <SliderOutput />
    <SliderTrack className={styles.track}>
      <SliderThumb className={styles.thumb} />
    </SliderTrack>
  </AriaSlider>)
}