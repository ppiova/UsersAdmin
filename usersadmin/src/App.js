import React, {useState, useEffect, Fragment} from 'react';
import './App.css';

import UsersList from './components/UsersList';

function App() {

  //Almacena el listado de usuarios
  const [usersList, saveUsersList] = useState([]);

  useEffect(() => {
    if(usersList.length === 0){
       //Se asigna un listado temporal, luego lo vamos a consumir de una BD o servicio
        saveUsersList(
          [
            {
              Id: 1,
              Name: 'Fabián',
              Surname: 'Castaño',
              Role: 'Administrador'
            },
            {
              Id: 2,
              Name: 'Marta',
              Surname: 'Perez',
              Role: 'Colaborador'
            },
            {
              Id: 3,
              Name: 'Martín ',
              Surname: 'Gomez',
              Role: 'Colaborador'
            }
          ]
        );   
    }
  }, [usersList]);
  

  return (
    <Fragment>
      <UsersList 
        usersList = {usersList}
      />
    </Fragment>   
  );

}

export default App;
