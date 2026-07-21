import "./App.css";
import Greeting from "./components/Greetings";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

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
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <Footer />
    </>
  );
}

export default App;
