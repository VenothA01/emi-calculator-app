import { useState } from "react";
import './App.css';
import SliderInput from "./components/slider-input";
import {tenureData} from './utils/constants'

function App() {
  const [cost, SetCost] = useState(0);
  const [interest, SetInterest] = useState(0);
  const [fee, SetFee] = useState(0);
  const [downPayment,setDownPayment] = useState(0);
  const [emi,setEmi] = useState(0);
  const [tenure, setTenure] = useState(12);


  const updateDownPayment = (event) => {
      if(!cost){
        return;
      }
      const dp = Number(event.target.value);
      setDownPayment(dp.toFixed(0));
      //calculate downpaymen
  };
  const updateEMI = (event) => {
    if(!cost){
      return;
    }
    const mp = Number(event.target.value); //monthly payment
    setEmi(mp.toFixed(0));
    //calc emi
  };
  const totalDownPayment = () => {};
  const totalEMI = () => {};
  const calculateEMI = (downPayment) => {};

  return (
    <div class="App">
      <span class="title">EMI Calculator</span>
      <span class="title">Total cost of Asset</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => SetCost(e.target.value)}
        placeholder="Total cost of Asset"
      />
      <span class="title">Interest rate in Fee</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => SetCost(e.target.value)}
        placeholder="Total cost of Asset"
      />
      <span class="title">Processing rate in Fee</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => SetCost(e.target.value)}
        placeholder="Total cost of Asset"
      />
      <SliderInput
        title="Down Payment"
        underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
        onChange={updateEMI}
        state={downPayment}
        min={0}
        max={cost}
        labelMin={"0%"}
        labelMax={"100%"}
      />

      <SliderInput
        title="Loan per Month"
        underlineTitle={`Total Loan Amount - ${totalEMI()}`}
        onChange={updateDownPayment}
        state={emi}
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
      />

      <span className="title">Tenure</span>
      <div className="tenureContainer">
        {tenureData.map((t) => {
          return (
            <button
              className={`tenure ${t === tenure ? "selected" : ""}`}
              onClick={() => setTenure(t)}
            >
              {t}
            </button>
          );
        })}
      </div>
      
    </div>
  );
}

export default App;
