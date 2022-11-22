import React from "react";
import "./ToDoList";

function ToDoList() {
//   const colourArr = ["red", "yellow", "green"];
  const [value, setValue] = React.useState("");
  const [newItems, setNewitems] = React.useState([]);

  React.useEffect(() => {
    const dataItem = localStorage.getItem("dataKey");

    if (dataItem) {
      console.log(dataItem);
      // setNewitems(dataItem);
    }
  }, [newItems]);

  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
  };

  const handleAdd = () => {
    setNewitems((oldItems) => {
      const list = [...oldItems, value];
      return [...new Set(list)];
    });
    setValue("");
  };

//   const getNewColor = (index) => {
//     console.log(index);
//     return colourArr[index];
//   };

  React.useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(newItems));
  }, [newItems]);

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {newItems.map((items, index) => {
          return <li className={`list-${index}`}>{items}</li>;
        })}
      </ol>
    </div>
  );
}

export default ToDoList;
