import { useState } from "react";
import { Input } from "react-aria-components";
import { Button, NumberInput, Slider } from "../src/";
import styles from "./App.module.css";

const defaultValue = 0;
function App() {
	const [value, setValue] = useState<number>(defaultValue);
	const [name, setName] = useState<string>("");
	function handleReset() {
		setValue(defaultValue);
		setName("");
	}
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log("Submit values", { name, value });
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.container}>
				<label htmlFor="size">
					Name <br />
					<Input
						value={name || ""}
						id="size"
						onChange={(ev) => setName(ev.target.value)}
					/>
				</label>
				<div className={styles.sizeContainer}>
					<label htmlFor="size">
						Size <br />
						<NumberInput
							aria-labelledby="size"
							id="size"
							value={value}
							onChange={setValue}
						/>
					</label>
					<Slider
						aria-labelledby="size"
						value={value}
						//showOutput={false}
						onChange={(value) => {
							if (Array.isArray(value)) {
								throw new Error(
									"Slider value is an array. Slider should not be used as a range slider.",
								);
							}
							setValue(value);
						}}
					/>
				</div>
				<div className={styles.buttonContainer}>
					<Button
						icon={<TrashIcon />}
						iconPosition="left"
						size="small"
						onPress={handleReset}
						variant="outlined"
						theme="primary"
					>
						Reset
					</Button>
					<Button size="small" type="submit">
						Submit
					</Button>
				</div>
			</div>
		</form>
	);
}

function TrashIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="17"
			height="16"
			viewBox="0 0 17 16"
			fill="none"
		>
			<mask
				id="mask0_2_1201"
				style={{ maskType: "alpha" }}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="17"
				height="16"
			>
				<rect
					x="0.250732"
					y="0.000457764"
					width="15.9991"
					height="15.9991"
					fill="currentColor"
				/>
			</mask>
			<g mask="url(#mask0_2_1201)">
				<path
					d="M4.91678 13.9996C4.55014 13.9996 4.23627 13.8691 3.97517 13.608C3.71408 13.3469 3.58353 13.033 3.58353 12.6664V4.00022H2.9169V2.66696H6.25004V2.00034H10.2498V2.66696H13.5829V4.00022H12.9163V12.6664C12.9163 13.033 12.7858 13.3469 12.5247 13.608C12.2636 13.8691 11.9497 13.9996 11.5831 13.9996H4.91678ZM11.5831 4.00022H4.91678V12.6664H11.5831V4.00022ZM6.25004 11.3331H7.58329V5.33347H6.25004V11.3331ZM8.91655 11.3331H10.2498V5.33347H8.91655V11.3331Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}

export default App;
