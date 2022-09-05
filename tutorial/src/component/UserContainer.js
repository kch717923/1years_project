import React, { useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const UserContainer = () => {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];

    const nextID = useRef(4);
    const onCreate = () =>{
        nextID.current +=1;
    }
    return (
        <>
            <CreateUser/>
            <UserList users={users}/>
        </>
    );
};

export default UserContainer;