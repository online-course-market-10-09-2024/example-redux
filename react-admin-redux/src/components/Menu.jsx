// Menu.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserStatus } from '../stores/actions';
import './Menu.css';

const Menu = () => {
  const userStatus = useSelector((state) => state.userStatus);
  const dispatch = useDispatch();

  const handleButtonClick = (status) => {
    dispatch(setUserStatus(status));
  };

  return (
    <div className='button-container'>
      <button
        className={`menu-button ${userStatus === 'active' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('active')}
      >
        Người dùng đang hoạt động
      </button>
      <button
        className={`menu-button ${userStatus === 'banned' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('banned')}
      >
        Người dùng bị cấm
      </button>
    </div>
  );
};

export default Menu;
