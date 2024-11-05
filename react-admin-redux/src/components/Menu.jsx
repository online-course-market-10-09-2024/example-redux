// Menu.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserStatus } from '../actions';
import './Menu.css';

const Menu = () => {
    const [selectedStatus, setSelectedStatus] = useState('active');
    const dispatch = useDispatch();

    const handleButtonClick = (status) => {
        setSelectedStatus(status);
        dispatch(setUserStatus(status));
    };

    return (
        <div className='button-container'>
            <button
                className={`menu-button ${selectedStatus === 'active' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('active')}
            >
                Người dùng đang hoạt động
            </button>
            <button
                className={`menu-button ${selectedStatus === 'banned' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('banned')}
            >
                Người dùng bị cấm
            </button>
        </div>
    );
};

export default Menu;
