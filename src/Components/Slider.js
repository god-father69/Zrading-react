import React,{useState,useEffect} from "react";
import styles2 from "../Assets/css/PopUp.module.css"
import styles3 from "../Assets/css/InputField.module.css"

export default function Slider(props) {
  const [value,onChange]=useState(1);
  const [totalAmt,setTotalAmt]=useState(0);
  const [sliderBit,setsliderBit] = useState(true);
  const [percentBit,setpercentBit] = useState(true);

  useEffect(()=>{
    // updateVal();
    (document.getElementById(props.id1).value) = value;
    console.log(totalAmt);
    if(sliderBit || percentBit){
      
      (document.getElementById(props.id2).value) =totalAmt;
      setTotalAmt((((parseInt(document.getElementById(props.id1).value))/100)+1)*props.amount);
    }
    
  })

  const updateValue = () =>{
    setpercentBit(true);
    onChange(document.getElementById(props.id1).value); 
  }

  const updateVal = () =>{
    setpercentBit(false);
    setsliderBit(false);
    onChange((((parseInt(document.getElementById(props.id2).value))/props.amount)-1)*100);
    setTotalAmt((((parseInt(document.getElementById(props.id1).value))/100)+1)*props.amount);
  }

  return (
    <div className={styles2.sliderParent}>
      <input type="range" min="1" max="100" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                    setsliderBit(true);
                  }}
      />
      <div className={styles2.buble}> 
        <input type = "text" id = {props.id1} className={styles3["form__field"]} onChange={updateValue}/ >
        <input type = "text" id = {props.id2} className={styles3["form__field"]} onChange={updateVal}/ >
      </div>
    </div>
  );
}