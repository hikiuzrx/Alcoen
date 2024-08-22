import { useState, useEffect } from "react";

export function DynamicText() {
  const arr: string[] = ['FIA', 'BLE', 'RÉU', 'SSI'];
  const [span1, setSpan1] = useState(' ');
  const [span2, setSpan2] = useState(' ');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: any;

    const sequence = [
     () => setSpan1(arr[index]),           // Step 1
     () => setTimeout(() => setSpan2(arr[(index + 1) % arr.length]), 1000), // Step 2: Delay of 1 second before setting span2
     () => {}, // Step 3: Pause for 2 seconds (handled by timeout)
     () => setSpan2(''),                   // Step 4
     () => {}, // Step 5: Pause for 1 second (handled by timeout)
     () => setSpan1(''),                   // Step 6
     () => {}, // Step 7: Pause for 2 seconds (handled by timeout)
   ];

   const executeSequence = (step: number) => {
     sequence[step]();
     let delay = 500;
     if (step === 2 || step === 6) delay = 2000; // 2-second pauses
     else if (step === 4) delay = 500; // 1-second pause

     if (step === sequence.length - 1) {
       setIndex((prevIndex) => (prevIndex + 2) % arr.length);
       step = -1; // Reset to beginning of sequence
     }

     timeoutId = setTimeout(() => executeSequence(step + 1), delay);
   };

   executeSequence(0); // Start the sequence

   return () => clearTimeout(timeoutId); // Clean up on unmount
 }, [index]);

  return (
    <div>
      <span className="text-9xl lg:text-8xl  xl:text-9xl text-primary pl-5 ml-20 m-4 mr-1 font-bold  mix-blend-color-burn">
        {span1}
      </span>
      <span className="text-9xl lg:text-8xl xl:text-9xl text-primary  m-4 ml-1 font-bold   mix-blend-color-burn">
        {span2}
      </span>
    </div>
  );
}

export default DynamicText;
