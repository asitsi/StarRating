import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  gray: "#6b7b8c",
};

function App() {
  const [value, setValue] = useState(0);
  const [hoverValue, setHoveValue] = useState(undefined);
  const [icon, setIcon] = useState();

  const stars = Array(5).fill(0);

  const handleClick = (data) => {
    setValue(data);
  };

  const HoverhandleClick = (data) => {
    setHoveValue(data);
  };

  const HandleMousehandleLeave = (data) => {
    setHoveValue(undefined);
  };
  useEffect(() => {
    if (value === 0) {
      setIcon("far fa-grin");
    } else if (value === 1) {
      setIcon("far fa-angry");
    } else if (value === 2) {
      setIcon("far fa-frown");
    } else if (value === 3) {
      setIcon("far fa-laugh-beam");
    } else if (value === 4) {
      setIcon(" far fa-grin-stars");
    } else {
      setIcon("far fa-grin-hearts");
    }
  }, [value]);

  return (
    <div className="App">
      <h1>Please Rate us...!</h1>
      <div className="stars">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={100}
              style={{ margineRight: 10, cursor: "pointer" }}
              color={
                (hoverValue || value) > index ? colors.orange : colors.gray
              }
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => HoverhandleClick(index + 1)}
              onMouseLeave={() => HandleMousehandleLeave()}
            />
          );
        })}
      </div>
      <h1>
        <i className={icon}></i>
      </h1>
    </div>
  );
}

export default App;
