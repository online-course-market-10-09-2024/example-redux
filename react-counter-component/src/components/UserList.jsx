import React from 'react';

const usersData = [
    { id: 1, name: 'Nguyen Van A', status: 'active' },
    { id: 2, name: 'Tran Thi B', status: 'banned' },
    { id: 3, name: 'Le Van C', status: 'active' },
    { id: 4, name: 'Pham Thi D', status: 'banned' },
    { id: 5, name: 'Hoang Van E', status: 'active' },
    { id: 6, name: 'Hoang Li E', status: 'active' },
];

const UserList = ({ userStatus, searchQuery }) => {
    const filteredUsers = usersData.filter((user) => {
        const matchesStatus = user.status === userStatus;
        const matchesQuery = searchQuery
            ? user.name.toLowerCase().includes(searchQuery.toLowerCase())
            : true; // Nếu searchQuery rỗng, matchesQuery luôn là true
        return matchesStatus && matchesQuery;
    });

    return (
        <div>
            <h2>Danh sách người dùng</h2>
            {filteredUsers.length > 0 ? (
                <ul>
                    {filteredUsers.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Không có người dùng phù hợp</p>
            )}
        </div>
    );
};

export default UserList;
