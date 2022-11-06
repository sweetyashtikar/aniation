import React, { useState } from "react";
// import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const DrawerComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <>
            <Button
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                open drawer
            </Button>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
            >
                <p>welcome to my drawer</p>
            </Drawer>
        </>
    );
};

export default DrawerComponent;
