import { useState } from "react";
function Form() {
    const [mytask, Setmytask] = useState([]);
  
    function sub(e) {
      e.preventDefault();
      const formName = new FormData(e.target);
      const formtime = new FormData(e.target);
      const task = formName.get("forName");
      const task2 = formtime.get("time-form");
  
      const newTask = {
        name: task,
        time:task2
      };
  
      Setmytask([...mytask, newTask]);
    }
  
    return (
      <div>
        <form onSubmit={sub}>
          <label>
            <input type="text" id="form-name" name="forName" />
            <input type="time" id="form-time"  name="time-form"/>
          </label>
          <button type="submit">add</button>
        </form>
       
        <div>
        <h2 >Task</h2>
          {mytask.map((element) => {
            return (
              <div key={element.name} style={{display:"flex"}}>
                <p>{element.name} - </p>
                <p style={{ fontWeight:"bold"}}>{element.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  export default Form