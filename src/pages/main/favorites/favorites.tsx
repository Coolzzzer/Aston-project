import { SetStateAction, useState } from "react";

function Favorites() {
      const [historyList, setHistoryList] = useState([
        "Batman",
        "Superman",
        "Hulk",
        "Spider Man",
      ]);
    
      const [value, setValue] = useState('');
    
      const result = historyList.map((element, index) => {
        return <p key={index}>{element}</p>;
      });
    
      function add() {
        if(value !== "")
        setHistoryList([...historyList, value ])
      }
    
      function inputValue(event: { target: { value: SetStateAction<string>; }; }) {
        setValue(event.target.value);
     }
    
      return <div className="Favorites">
        
          <input value={value} onChange={inputValue}></input>
          <button onClick={add}>Добавить элемент</button>
          {result}
      </div>;
    }
    
    export default Favorites;
    