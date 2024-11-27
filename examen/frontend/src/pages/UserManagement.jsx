import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UserManagement = () => {
  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserManagement;
