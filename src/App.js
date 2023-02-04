import './App.css';
// import {useState} from 'react';
import Data from "./components/quiz.json"
import Data_pl from "./components/quiz-pl.json"
function App() {
  
  // const [isActive, setIsActive] = useState(false);

  // function check(e){
  //   // console.log(e.target.className);
  //   if(e.target.className === "true")
  //   {
  //     console.log("ok");
  //   }
  //   else
  //   {
  //     console.log("Nie ok");
  //   } 
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <RenderQuestions/> */}

        {
          Data.map(d =>{
            return(
              <div key={d.id}>
                <p>{d.question}</p>
                <ul>
                  {d.answers.map(answer => {
                    if (d.correct_answer.includes(answer))
                    {
                      return(
                      <li className="true" onClick={((e) => e.target.style.backgroundColor = "green")}>{answer}</li>
                      )
                    }     
                    else
                    {
                      return(
                      <li className="false" onClick={((e) => e.target.style.backgroundColor = "red")}>{answer}</li>
                      )
                    }       
                    
                })}
                </ul>
              </div>
            )
          })
        }
        
      </header>
    </div>
  );
}

export default App;
