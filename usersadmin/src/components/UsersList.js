import React from 'react';

function UsersList({usersList}){
    
    return(
        <div>
            <h2>LISTADO DE USUARIOS</h2>
            <table className="table-striped">
                <thead>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                </thead>
                <tbody className="">
                    {usersList.map(user => {
                        return(
                            <tr>
                               <td>{user.Surname}</td>
                               <td>{user.Name}</td>
                               <td>{user.Role}</td>
                            </tr>                           
                        )
                    })}
                </tbody>           
            </table>
        </div>      
    )

}

export default UsersList;