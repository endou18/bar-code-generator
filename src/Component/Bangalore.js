import React, { useState } from "react";
import "./style.css";
import "../App.css";
import axios from "axios";
const Bangalore = (props) => {
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const [arrayEmail, setArrayEmail] = useState({ email: "" });
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(true);

        // Add the new email to the arrayEmail state
        const updatedArrayEmail = {
            ...arrayEmail,
            email: email
        };

        // Update the state
        setArrayEmail(updatedArrayEmail);

        // Make the POST request
        axios.post('http://localhost:8000/email/', updatedArrayEmail)
            .then((response) => {
                console.log('Post added:', response.data);
                // Clear the form fields after submission
                setEmail("");
            })
            .catch((error) => {
                console.error('Error adding post:', error);
            });
    }
    return (
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            {/* Vertical Navbar */}
            <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                <div className="container-fluid">
                    {/* Toggler */}
                    <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Brand */}
                    <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                        <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." />
                    </a>
                    {/* User menu (mobile) */}
                    <div className="navbar-user d-lg-none">
                        {/* Dropdown */}
                        <div className="dropdown">
                            {/* Toggle */}
                            <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="avatar-parent-child">
                                    <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-rounded-circle" />
                                    <span className="avatar-child avatar-badge bg-success"></span>
                                </div>
                            </a>
                            {/* Menu */}
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                <a href="#" className="dropdown-item">Profile</a>
                                <a href="#" className="dropdown-item">Settings</a>
                                <a href="#" className="dropdown-item">Billing</a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">Logout</a>
                            </div>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="sidebarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-house"></i> Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-bar-chart"></i> To-Do List
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-cloud"></i> Weather
                                </a>
                            </li>
                        </ul>

                        <div className="mt-auto"></div>
                        <hr className="navbar-divider" />
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-person-square"></i> Account
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-box-arrow-left"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Main content */}
            <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                {/* Header */}
                <header className="bg-surface-primary border-bottom pt-3 pb-3">
                    <div className="container-fluid">
                        <div className="mb-npx">
                            <div className="row align-items-center">
                                <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                    <h1 className="h2 mb-0 ls-tight">Personal Dashboard</h1>
                                </div>
                                <div className="col-sm-6 col-12 text-sm-end">
                                    <div className="mx-n1">
                                        <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1">
                                            <span className="pe-2">
                                                <i className="bi bi-plus"></i>
                                            </span>
                                            <span>Create Task</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main */}
                <main className="py-6 bg-surface-secondary">
                    <div className="container-fluid">
                        {/* Card stats */}
                        <div className="row g-6 mb-6">
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <form className="form-cont" onSubmit={handleSubmit}>
                                        <input type="email" placeholder="Enter your mail" onChange={emailHandler} />
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Wifi</span>
                                                <span className="h3 font-bold mb-0">
                                                    {props.data.map((item, index) => {
                                                        return item.place === "Bangalore" && show ? item.wifi : null;
                                                    })}
                                                </span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Password</span>
                                                <span className="h3 font-bold mb-0">
                                                    {props.data.map((item, index) => {
                                                        return item.place === "Bangalore" && show ? item.password : null;
                                                    })}
                                                </span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                    <i className="bi bi-clock-history"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Today Weather</span>
                                                <span className="h3 font-bold mb-0">24°C°F</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                    <i className="bi bi-minecart-loaded"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-6 mb-6">
                            <div className="col-xl-6 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Task</span>
                                                <span className="h3 font-bold mb-0">90</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-6 col-12">
                                <div className="card shadow border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Pending</span>
                                                <span className="h3 font-bold mb-0">215</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow border-0 mb-7">
                            <div className="card-header">
                                <h5 className="mb-0">To-Do List</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover table-nowrap">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Sr. No.</th>
                                            <th scope="col">Task Name</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Description</th>
                                            {/* <th scope="col">Created Date</th>
                                            <th scope="col">Task Status</th>
                                            <th scope="col" className="text-center">Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                {/* <Route path="/gaya" element={<Gaya />} >Hello</Route> */}
                                                {/* <Link to="/gaya">Gaya</Link> */}
                                            </td>
                                            <td>

                                            </td>
                                            <td>

                                            </td>

                                            {/* <td>March 3, 2024</td>
                                            <td>In Progress</td>
                                            <td className="text-end">
                                                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer border-0 py-5">
                                <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
export default Bangalore;