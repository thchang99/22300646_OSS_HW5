import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ShowList(){
  const [friendsList, setFriendsList] = useState([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    major: '',
    gender: '',
    phone: '',
    email: '',
    birthday: '',
    'gap-year': '',
    'close-friend': '',
    'home-city': '',
    id: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const resetFormData = () => {
    setFormData({
      firstname: '',
      lastname: '',
      major: '',
      gender: '',
      phone: '',
      email: '',
      birthday: '',
      'gap-year': '',
      'close-friend': '',
      'home-city': '',
      id: '',
    });
  };

  const getStudents = () => {
    axios
      .get('https://67322f602a1b1a4ae10f2ce8.mockapi.io/friends/friends/')
      .then((response) => {
        setFriendsList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const postData = () => {
    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      major: formData.major,
      gender: formData.gender,
      phone: formData.phone,
      email: formData.email,
      birthday: formData.birthday,
      'gap-year': formData['gap-year'],
      'close-friend': formData['close-friend'],
      'home-city': formData['home-city'],
    };

    axios
      .post('https://67322f602a1b1a4ae10f2ce8.mockapi.io/friends/friends/', data)
      .then((response) => {
        resetFormData();
        getStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateData = () => {
    const id = formData.id;
    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      major: formData.major,
      gender: formData.gender,
      phone: formData.phone,
      email: formData.email,
      birthday: formData.birthday,
      'gap-year': formData['gap-year'],
      'close-friend': formData['close-friend'],
      'home-city': formData['home-city'],
    };

    axios
      .put(`https://67322f602a1b1a4ae10f2ce8.mockapi.io/friends/friends/${id}`, data)
      .then((response) => {
        resetFormData();
        getStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteData = () => {
    const id = formData.id;

    axios
      .delete(`https://67322f602a1b1a4ae10f2ce8.mockapi.io/friends/friends/${id}`)
      .then((response) => {
        resetFormData();
        getStudents();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* Add New Friend Modal */}
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addModalLabel">
                Add New Friend
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetFormData}
              ></button>
            </div>
            <div className="modal-body">
              <div id="add">
                <form>
                  <label>Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Lastname</label>
                  <input
                    id="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Major</label>
                  <input
                    id="major"
                    type="text"
                    value={formData.major}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Gender</label>
                  <input
                    id="gender"
                    type="text"
                    value={formData.gender}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Phone</label>
                  <input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Email</label>
                  <input
                    id="email"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Birthday</label>
                  <input
                    id="birthday"
                    type="date"
                    value={formData.birthday}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Gap-year</label>
                  <input
                    id="gap-year"
                    type="text"
                    value={formData['gap-year']}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Close Friend</label>
                  <input
                    id="close-friend"
                    type="text"
                    value={formData['close-friend']}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Home City</label>
                  <input
                    id="home-city"
                    type="text"
                    value={formData['home-city']}
                    onChange={handleInputChange}
                  />
                  <br />
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={resetFormData}
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  postData();
                  resetFormData();
                }}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Friend Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Edit Friend
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetFormData}
              ></button>
            </div>
            <div className="modal-body">
              <div id="edit">
                <form>
                  <label>Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Lastname</label>
                  <input
                    id="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Major</label>
                  <input
                    id="major"
                    type="text"
                    value={formData.major}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Gender</label>
                  <input
                    id="gender"
                    type="text"
                    value={formData.gender}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Phone</label>
                  <input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Email</label>
                  <input
                    id="email"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Birthday</label>
                  <input
                    id="birthday"
                    type="date"
                    value={formData.birthday}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Gap-year</label>
                  <input
                    id="gap-year"
                    type="text"
                    value={formData['gap-year']}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Close Friend</label>
                  <input
                    id="close-friend"
                    type="text"
                    value={formData['close-friend']}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>Home City</label>
                  <input
                    id="home-city"
                    type="text"
                    value={formData['home-city']}
                    onChange={handleInputChange}
                  />
                  <br />
                  <label>ID</label>
                  <input
                    id="id"
                    type="text"
                    value={formData.id}
                    onChange={handleInputChange}
                  />
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={resetFormData}
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteData();
                  resetFormData();
                }}
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Delete ID
              </button>
              <button
                type="button"
                onClick={() => {
                  updateData();
                  resetFormData();
                }}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <h1>Friends List</h1>
      <div id="list">
        <button type="button" className="btn btn-warning" onClick={getStudents}>
          Load Friend List
        </button>
        <div id="contents">
          {friendsList.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Major</th>
                  <th>Phone</th>
                  <th>Birthday</th>
                </tr>
              </thead>
              <tbody>
                {friendsList.map((friend) => (
                  <tr key={friend.id}>
                    <td>{friend.id}</td>
                    <td>{friend.firstname}</td>
                    <td>{friend.lastname}</td>
                    <td>{friend.major}</td>
                    <td>{friend.phone}</td>
                    <td>{friend.birthday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No friends loaded yet.</p>
          )}
        </div>
      </div>

      {/* Buttons to trigger modals */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        Add New Friend
      </button>

      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        Edit Friend
      </button>
    </div>
  );
};
