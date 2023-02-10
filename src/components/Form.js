import React, { useEffect, useState } from 'react'

export default function Form(props) {
    const [newStudent, setNewStudent] = useState(
        {
            id: '',
            name: '',
            age: '',
            gender: true,
            birthDate: '',
            birthPlace: 'HN',
            address: ''
        }
    )
    useEffect(() => {
        props.selectedStudent && setNewStudent(props.selectedStudent)
    }, [props.selectedStudent])

    const handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setNewStudent({ ...newStudent, [key]: value })
    }

    const validateEdit = () => {
        let checkValidate = false
        if (newStudent.id.trim() === '') {
            checkValidate = false
            alert('Please enter the student id')
            return false
        }
        if (newStudent.name.trim() === '') {
            checkValidate = false;
            alert('Please enter the student name!')
            return false
        } else {
            checkValidate = true
        }
        console.log(newStudent.age);
        if (newStudent.age === '') {
            checkValidate = false
            alert('Please enter the student age!')
            return false
        } else {
            checkValidate = true
        }
        if (checkValidate) return true
    }
    
    const validate = () => {
        let checkValidate = false
        if (newStudent.id.trim() === '') {
            checkValidate = false;
            alert('Please enter the student id!')
            return false
        } else {
            let checkExist = false
            for (let i = 0; i < props.students.length; i++) {
                if (props.students[i].id.trim() === newStudent.id.trim()) {
                    checkExist = true;
                    break;
                }
            }
            if (checkExist) {
                checkValidate = false;
                alert('This Id is already exist! Please try another!')
                return false
            } else {
                checkValidate = true;
            }
        }
        if (newStudent.name.trim() === '') {
            checkValidate = false;
            alert('Please enter the student name!')
            return
        } else {
            checkValidate = true
        }
        if (newStudent.age.trim() === '') {
            checkValidate = false
            alert('Please enter the student age!')
            return false
        } else {
            checkValidate = true
        }
        if (checkValidate) return true
    }
    const handleSubmit = (event) => {
        if (props.toggle.action === 'Add') {
            event.preventDefault();
            if (validate()) {
                props.rcNewStudent(newStudent)
            }
        } else {
            event.preventDefault();
            const editArray = []
            setNewStudent(newStudent);
            const students = props.students
            students.forEach((student) => {
                if (student.id === props.selectedStudent.id) {
                    student = {
                        id: newStudent.id,
                        name: newStudent.name,
                        age: newStudent.age,
                        gender: newStudent.gender,
                        birthDate: newStudent.birthDate,
                        birthPlace: newStudent.birthPlace,
                        address: newStudent.address
                    }
                }
                editArray.push(student)
            })
            if(validateEdit()) {
                props.setShowStudents(editArray)
                alert("Sửa thành công!")
            }
        }
    }
    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input disabled={props.toggle.action === "Seen" ? true : false} value={newStudent.id} onChange={handleChange} type="text" className="form-control" name="id" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input disabled={props.toggle.action === "Seen" ? true : false} value={newStudent.name} onChange={handleChange} type="text" className="form-control" name="name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input disabled={props.toggle.action === "Seen" ? true : false} value={newStudent.age} onChange={handleChange} type="text" className="form-control" name="age" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select disabled={props.toggle.action === "Seen" ? true : false} value={newStudent.gender} onChange={handleChange} className="form-control" name="gender">
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input disabled={props.toggle.action === "Seen" ? true : false} value={newStudent.birthDate} onChange={handleChange} className="form-control" placeholder="dd/mm/yyyy" name="birthDate" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select disabled={props.toggle.action === "Seen" ? true : false} value={newStudent.birthPlace} onChange={handleChange} className="form-control" name="birthPlace">
                                    <option value={'HN'}>Hà Nội</option>
                                    <option value={'HCM'}>TP. Hồ Chí Minh</option>
                                    <option value={'ĐN'}>Đà Nẵng</option>
                                    <option value={'QN'}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea disabled={props.toggle.action === "Seen" ? true : false} value={newStudent.address} onChange={handleChange} className="form-control" name="address" />
                            </div>
                        </div>
                        <button disabled={props.toggle.action === "Seen" ? true : false} onClick={handleSubmit} type="submit" className="btn btn-primary me-2">
                            {props.toggle.action}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
