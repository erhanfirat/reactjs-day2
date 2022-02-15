import React, { useReducer, useEffect, useState } from "react";
import { studentReducer, addNewStudentAction, bulkInsertStudentsAction } from "./StudentsReducer";


const StudentList = () => {
    const [studentsState, dispatch] = useReducer(studentReducer, { students: [], count: 0 });
    const [loading, setLoading] = useState(false);

    const loadStudents = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            const newStudents = [
                { no: "1", name: "Ahmet" },
                { no: "2", name: "Veli" },
                { no: "3", name: "Murat" },
                { no: "4", name: "Hüseyin" },
                { no: "5", name: "Zehra" },
                { no: "6", name: "Tülin" },
                { no: "7", name: "Mustafa" },
                { no: "3", name: "Mehmet" }
            ];
            dispatch(bulkInsertStudentsAction(newStudents))

        }, 2500);
    }

    useEffect(() => {
        console.log("studentsState > ", studentsState);
    }, [studentsState])

    return <div>
        <button onClick={loadStudents}>Load Students</button>
        {loading && <p>Loading...</p>}
        {!loading && <div>
            <p>Students Count: {studentsState.count}</p>
            <ul>
                {studentsState.students.map(student => <li key={student.no}>
                    {student.no} - {student.name}
                </li>)}
            </ul>
        </div>}
    </div>;
}

export default StudentList;