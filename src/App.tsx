import HeaderCustom from "./components/Header"
import Welcome from "./components/Welcome"
import ProfileCard from "./components/ProfileCard"
import Counter from "./components/Counter"

type Teacher = {
  name : string;
  job : string;
  year : number;
  id : number;
}

const teachers: Teacher[] = [
  {
    name: "sandhika",
    job: "Dosen",
    year : 1995,
    id: 1
  },
  {
    name: "Theo",
    job: "Content Creator",
    year : 1995,
    id: 2
  },
  {
    name: "Eko",
    job: "Tech Lead",
    year : 1993,
    id: 3
  },

]

function App() {
  return (
    <>
      <HeaderCustom/>
      {/* <h1>Hello World</h1> */}

      <div className="container-card">
      {/* {
        teachers.map((teacher) => {
          return <ProfileCard name={teacher.name} year={teacher.year} job={teacher.job} key={teacher.id}/>
        })
      } */}


      <Counter />
      
      </div>


      <Welcome/>
    </>
  )
}

export default App
