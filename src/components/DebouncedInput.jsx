import {useEffect, useState} from "react";
import {useDebounce} from "../hooks/useDebounce.js";

const DebouncedInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Uncomment this code to see how it works. The only thing you need to create is useDebounce hook
  const debouncedValue = useDebounce(inputValue, 2000);

  useEffect(() => {
    console.log(
      "Value is " + debouncedValue + " and it should be updated after 2s"
    );
  }, [debouncedValue]);

  return (
    <>
      <h1 className="text-3xl font-bold">Debounced Input</h1>
      <input
        value={inputValue}
        onChange={handleChange}
        className="p-4 rounded-lg border border-red-300 focus:outline-red-500"
      />
      <h3>
        Debounced means that value should update only after the delay - 2s in
        our case, but you can set any
      </h3>
        <h3>
            <strong>Current value:</strong> {debouncedValue}
        </h3>
    </>
  );
};

export default DebouncedInput;
