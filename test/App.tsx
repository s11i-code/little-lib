import { useState } from "react";
import { Button, NumberInput, Slider } from "../src/"

function App() {
  const [value, setValue] = useState<number|undefined>(-1);

  return <form >
    <div>
  <NumberInput min={-3} step={4} value={value} onChange={setValue} />
  </div>
    <div>
  <Slider value={value} onChange={setValue} />
  </div>
  <Button>Submit</Button>
</form>

}

export default App
