import "./App.css";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div className="container">
      <h1>Student Profile Dashboard</h1>

      <div className="cards">
        <StudentCard
          image="https://randomuser.me/api/portraits/men/1.jpg"
          name="Rahul Sharma"
          course="B.Tech CSE"
          year="3rd Year"
          cgpa="8.5"
        />

        <StudentCard
          image="https://randomuser.me/api/portraits/women/1.jpg"
          name="Priya Singh"
          course="BCA"
          year="2nd Year"
          cgpa="9.1"
        />
      </div>
    </div>
  );
}

export default App;