import { useState } from "react";
import { Button, NumberInput, Slider } from "../src/"

function App() {
  const [value, setValue] = useState<number>(-1);

  return <form >
    <div>
  <NumberInput  value={value} onChange={setValue} />
  </div>
    <div>
  <Slider value={value} onChange={(value) => {
    if (Array.isArray(value)) {
      throw new Error("Slider value is an array. Slider should not be used as a range slider.")
    } else {
      setValue(value)
    }
  }} />
  </div>
  <Button>Submit</Button>
</form>

}

export default App
