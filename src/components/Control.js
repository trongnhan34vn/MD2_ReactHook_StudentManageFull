import React, { useState } from 'react'

export default function Control(props) {
    const [searchData, setSearchData] = useState("")
    const handleChangeSearch = (event) => {
        let searchData = event.target.value;
        setSearchData(searchData)
    }
    const handleSubmitSearch = (event) => {
        event.preventDefault()
        props.rcSearchData(searchData)
    }
    const handleChangeSort = (event) => {
        let sortData = event.target.value;
        let sort = sortData.split('-');
        let sortBy = sort[0];
        let sortDir = sort[1];
        props.rcSortData(sortBy, sortDir)
    }
    const handleAddStudent = () => {
        let statusTog = props.toggle.status;
        props.setToggle(
            {
                status: !statusTog,
                action: "Add"
            }
        )
        props.setSelectedStudent(null)
    }
    return (
        <div>
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button onClick={handleAddStudent} type="button" className="btn btn-primary btn-icon-text">
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                onChange={handleChangeSearch}
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                            />
                            <button onClick={handleSubmitSearch} className="btn btn-primary btn-icon-text">
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select onChange={handleChangeSort} className="form-control">
                            <option>Sắp xếp</option>
                            <option value="name-ASC">Tên tăng dần</option>
                            <option value="name-DSC">Tên giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DSC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
