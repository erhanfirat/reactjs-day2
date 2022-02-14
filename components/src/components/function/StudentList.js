import { useReducer, useState } from "react";

const studentReducer = (state, action) => {
    const { students } = state;
    switch (action.type) {
        case "add":
            let exist = false;
            students?.map(student => {
                if (student.no == action.student.no) {
                    exist = true;
                }
            });
            if (!exist) {
                students.push(action.student);
                students.sort((a, b) => a.name > b.name ? 1 : -1);
            }
            return { students, count: students.length };
        default:
            return state;
    }
}

const addNewStudentAction = (student) => ({
    type: "add",
    student: student
});


const StudentList = () => {

    const [state, dispatch] = useReducer(studentReducer, { students: [], count: 0 });
    const [loading, setLoading] = useState(false);

    const loadStudents = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            dispatch(addNewStudentAction({ no: "1", name: "Ahmet" }));
            dispatch(addNewStudentAction({ no: "2", name: "Veli" }));
            dispatch(addNewStudentAction({ no: "3", name: "Murat" }));
            dispatch(addNewStudentAction({ no: "4", name: "Hüseyin" }));
            dispatch(addNewStudentAction({ no: "5", name: "Zehra" }));
            dispatch(addNewStudentAction({ no: "6", name: "Tülin" }));
            dispatch(addNewStudentAction({ no: "7", name: "Mustafa" }));
            dispatch(addNewStudentAction({ no: "3", name: "Mehmet" }));
        }, 2500);
    }

    return <div>
        <button onClick={loadStudents}>Import Students</button>

        {loading && <p>Loading...</p>}
        {!loading &&
            <ul>
                {state.students?.map(student => <li key={student.no}>
                    {student.no} - {student.name}
                </li>)}
            </ul>
        }

    </div>
}

export default StudentList;