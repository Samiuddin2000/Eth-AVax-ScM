import React, { useState } from "react";



const Home = ({ state }) => {
  const [inputValue, setInputValue] = useState("");
  const [memos, setMemos] = useState([]);
   

  console.log(state);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
 

  
  const handlepay= async ()=>{
     await state.contractInstance.buyCoffee(inputValue,{value:1});
     console.log("Successfully paid");
   

  }

  const handleMemos = async () => {
    const fetchedMemos = await state.contractInstance.getList();
    console.log(fetchedMemos);
    setMemos(fetchedMemos);
  };

  return (
    <div >
     
      <form
        onSubmit={handleSubmit}
       
      >
        <input
          id="message"
          type="text"
          placeholder="Enter your valuable feedback"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
         
          onClick={handlepay}
        >
          Pay
        </button>
      </form>
     

      <button  onClick={handleMemos}>
        GetMemos
      </button>

      <div
        id="memoslist"
        
      >
        {memos.map((memo, index) => (
          <div key={index} >
            
            <p>{memo.message}</p>
            <p>{memo.orderAddress}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;