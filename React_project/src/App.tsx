import "./App.css";
import Greeting from "./components/Greetings";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import {useEffect,useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
  alert("tested");
  }, [count]);


  function handleSubmit(
    event: React.FormEvent
  ){
    event.preventDefault();
    console.log(name);
  }

  return (
    <>
      <h1>Get started</h1>
      <p>This is my first React application</p>
      <Greeting />
      <Navbar />
      <Hero />

      <CourseCard
        title="React"
        instructor="John Doe"
        duration={8}
        completed={false}
      />

      <CourseCard
        title="TypeScript"
        instructor="Jane Doe"
        duration={4}
        completed={true}
      />

      <form onSubmit={handleSubmit}>
        <input
        value={name}
        placeholder="Name"
        onChange={(event)=> setName(event.target.value)}
        />
        <br/>

        <input
        value={password}
        placeholder="password"
        onChange={(event)=> setPassword(event.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Footer />
    </>
  );
}

export default App;
