import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import"./managingCareers.css"

const SmallCard = ({ title, description, createdAt }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="card-container">
      <div className="card-header">
        <div>
          <h3 className="card-title">{title||""} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quaerat repellendus amet maxime doloribus ratione rem temporibus, neque quod ut!</h3>
          <p className="card-description">{description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dolor itaque similique, aut eius ut tempore nam natus nostrum perferendis aliquid autem quos veritatis doloribus molestias consequuntur facere molestiae fuga.</p>
          <span className="card-date">{createdAt}12/51/4115

          </span>
        </div>
        <div className="card-menu-wrapper">
          <HiDotsVertical className="card-menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
          {menuOpen && (
            <div className="card-dropdown-menu">
              <button className="dropdown-item">Edit</button>
              <button className="dropdown-item">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
