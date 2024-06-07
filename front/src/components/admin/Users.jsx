import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';


export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/getAll');
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    };
  
    const deleteUser = async (id) => {
      try {
        await fetch(`http://localhost:5000/api/auth/${id}`, {
          method: 'DELETE',
        });
        setUsers(users.filter((user) => user.id !== id));
        console.log('User deleted successfully');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };
  return (
    <>
     <Container>
        <Row>
            <Col lg='12'>
            <div className="container">
      <h2 className="my-4 text-success mr-8">Les utilisateurs</h2>
      <table className="table table text-center">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
              <img
                    src={`http://localhost:5000/uploads/${user.profile_image}`}
                    alt={user.name}
                  />
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </Col>
        </Row>
     </Container>
    </>
  )
}
