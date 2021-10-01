import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

export const Example = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);
  
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret type="button" class="btn btn-primary dropdown-toggle">
          Tutos
        </DropdownToggle>
        <DropdownMenu>
          {/* POUR EN FAIRE DES LIENS CLIQUABLES : 
          
          <DropdownItem><Link class="DropdownLien"to="/connexion">Connexion</Link></DropdownItem> 
          
          */}

          <DropdownItem>Langage</DropdownItem>
          <DropdownItem>Techno</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }