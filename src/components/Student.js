import React, { useContext, useState } from 'react'
import { studentContext } from '../App'

export default function Student(props) {
  const { student, stt } = props
  const dataSStudent = useContext(studentContext);
  const handleSubmit = (selectedStudent, action) => {
    if (action === 'seen') {
      dataSStudent.rcSelectedStudent(selectedStudent)
      dataSStudent.setToggle(
        {
          status: true,
          action: "Seen"
        }
      )
    }
    if (action === 'edit') {
      dataSStudent.rcSelectedStudent(selectedStudent)
      dataSStudent.setToggle(
        {
          status: true,
          action: "Edit"
        }
      )
    }
    if (action === 'delete') {
      dataSStudent.handleDelete(selectedStudent)
    }
  }
  return (
    <tr>
      <td>{stt}</td>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.gender ? "Nam" : "Nữ"}</td>
      <td>
        <div className="template-demo">
          <button
            onClick={() => handleSubmit(student, "seen")}
            type="button"
            className="btn btn-danger btn-icon-text"
          >
            Xem
          </button>
          <button
            onClick={() => handleSubmit(student, "edit")}
            type="button"
            className="btn btn-warning btn-icon-text"
          >
            Sửa
          </button>
          <button
            onClick={() => handleSubmit(student, "delete")}
            type="button"
            className="btn btn-success btn-icon-text"
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  )
}
