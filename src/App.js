import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import Form from './components/Form';
import { createContext, useEffect, useState } from 'react';

export const studentContext = createContext();
function App() {
  const students = [
    {
      id: "SV001",
      name: "Nguyễn Văn A",
      age: 20,
      gender: true,
      birthDate: "01/06/2000",
      birthPlace: "HN",
      address: "số 1 Trần Duy Hưng"
    },
    {
      id: "SV002",
      name: "Nguyễn Thị B",
      age: 12,
      gender: false,
      birthDate: "01/06/2000",
      birthPlace: "HN",
      address: "số 1 Trần Duy Hưng"
    },
    {
      id: "SV003",
      name: "Nguyễn Văn C",
      age: 24,
      gender: true,
      birthDate: "01/06/2000",
      birthPlace: "HN",
      address: "số 1 Trần Duy Hưng"
    }
  ]
  const [toggle, setToggle] = useState(
    {
      status: false,
      action: '',
    }
  )
  const [showStudents, setShowStudents] = useState(students)
  const [selectedStudent, setSelectedStudent] = useState("")
  const rcSearchData = (searchData) => {
    if (searchData === "") {
      setShowStudents(students)
    } else {
      setShowStudents(students.filter(student => student.name.toLowerCase().includes(searchData.toLowerCase())))
    }
  }

  const rcSortData = (sortBy, sortDir) => {
    let sort = [];
    if (sortBy === "Sắp xếp" && sortDir === undefined) {
      sort = showStudents.sort((a, b) => (a.id.slice(-1) - b.id.slice(-1)))
    }
    if (sortBy === 'name') {
      if (sortDir === 'ASC') {
        sort = showStudents.sort((a, b) => (a.name >= b.name) ? 1 : -1)
      } else {
        sort = showStudents.sort((a, b) => (a.name >= b.name) ? -1 : 1)
      }
    }
    if (sortBy === 'age') {
      if (sortDir === 'ASC') {
        sort = showStudents.sort((a, b) => (a.age - b.age))
      } else {
        sort = showStudents.sort((a, b) => (b.age - a.age))
      }
    }
    setShowStudents(() => [...sort])
  }

  const rcNewStudent = (newStudent) => {
    let newArr = []
    newArr = [...students, newStudent]
    setShowStudents(() => newArr)
  }

  const elementForm = (toggle.status) ? <Form setShowStudents={setShowStudents} selectedStudent={selectedStudent} rcNewStudent={rcNewStudent} students={showStudents} toggle={toggle} /> : ""

  const rcSelectedStudent = (selectedStudent) => {
    setSelectedStudent(selectedStudent);
  }

  const handleDelete = (studentDel) => {
    const newStudents = showStudents.filter(student => student.id !== studentDel.id)
    setShowStudents(newStudents)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control setSelectedStudent={setSelectedStudent} toggle={toggle} setToggle={setToggle} rcSortData={rcSortData} rcSearchData={rcSearchData} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <studentContext.Provider value={{rcSelectedStudent, toggle, setToggle, handleDelete}} >
              <ListStudents students={showStudents} />
            </studentContext.Provider>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {elementForm}
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default App;
