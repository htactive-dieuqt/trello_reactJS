import React from 'react';

import './style.css';

const Header = ({dieudata}) => (
    <div className="base">
        <div className="header">
            <div className="left-aligned">
                <div className="button">Home</div>
                <div className="button">Boards</div>
                <div className="button">Search bar</div>
            </div>

            <div className="logo button">
            <div className="button">Logo</div>
            </div>

            <div className="right-aligned">
                {
                    (dieudata || []).map((value, index) => {
                        return <div className="button" key={index}>{value}</div>
                    })
                }
            </div>

            <div class="board-header">
                <div class="left">
                    <div class="board-header-text">Board Title</div>
                    <div class="button">Star</div>
                    <div class="button">Personal</div>
                    <div class="button">Private</div>
                </div>
            </div>
        </div>
    </div>
)

export default Header;