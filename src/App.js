import logo from './logo.svg';
import './App.css';
import joke from j

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cardbox">
          <p id="jokeText"> Joke text here</p>
          <button onclick={jokes} className="reload"> Reload</button>
        </div>
      </header>
    </div>
  );
}

function jokes(){
  const jokeButton = document.querySelector(".reload");
  const jokeHolder = document.querySelector(".joketext");
  const buttonText = [
    "Ugh.",
    "🤦🏻‍♂️",
    "omg dad.",
    "you are the worst",
    "seriously",
    "stop it.",
    "please stop",
    "that was the worst one",
  ];
  async function fetchJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    console.log(response);
  }
  fetchJoke();
}

export default App;
