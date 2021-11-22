import { createContext, useEffect, useState, useRef } from 'react';

export const StudentContext = createContext()

const StudentContextProvider = (props) => {
    const [students, setStudents] = useState([
        { id: 1, name: "John Wick", age: 23, course: "WEB DEV", batch: "October" },
        { id: 2, name: "Shakitman", age: 22, course: "WEB DEV", batch: "November" },
        { id: 3, name: "Taylor", age: 21, course: "WEB DEV", batch: "September" },
        { id: 4, name: "Swift", age: 24, course: "WEB DEV", batch: "September" },
        { id: 5, name: "Thor", age: 22, course: "WEB DEV", batch: "October" },
    ])

    // useEffect(() => {
    //     setStudents(JSON.parse(localStorage.getItem('students')))
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('students', JSON.stringify(students));
    // })

    const listStudents = students;

    let countRef = useRef(students.length);

    console.log("id", countRef.current + 1)
    const addStudent = (name, age, batch, course) => {
        setStudents([...students, { id: countRef.current += 1, name, age, batch, course }])
    }

    const updateStudent = (id, updatedStudent) => {
        console.log(typeof id);
        setStudents(students.map((student) => student.id === parseInt(id) ? updatedStudent : student))
    }

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id))
    }

    return (
        <StudentContext.Provider value={{ listStudents, addStudent, updateStudent, deleteStudent }}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;