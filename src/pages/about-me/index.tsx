import React, { useState } from "react";
import { Menu } from "../../components/menu";

export function AboutMe() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    return (
        <><h1>About me</h1><Menu onClick={toggleMenu} /></>

    )
}