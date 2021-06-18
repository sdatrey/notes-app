import React from 'react';
import Button from "@material-ui/core/Button";

const Header = ({oldToNew, newToOld}) => {
    return (

        <div className='header'>
            <Button onClick={oldToNew}>old to new</Button>
            <Button onClick={newToOld}>new to old</Button>
        </div>
    );
};

export default Header;
