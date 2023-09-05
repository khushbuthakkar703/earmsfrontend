import './leftMenu.scss';
import React, { useState } from 'react';
import menuOptions from './menuOptions';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const LeftDiv = () => {
  const [currentOpen, setCurrentOpen] = useState(undefined);

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCurrentOpen(e[0]);
  };
  return (
    <div className='left-menu-base-div'>
      <Accordion
        className='accordion-base'
        allowZeroExpanded
        onChange={handleChange}
      >
        {menuOptions &&
          menuOptions.map((val, i) => (
            <AccordionItem
              uuid={i}
              style={{ marginTop: '10px' }}
              onClick={() => {
                if (val?.pathName) {
                  navigate(val?.pathName);
                }
              }}
            >
              <AccordionItemHeading className='accordion-header'>
                <AccordionItemButton style={{ marginBottom: '20px' }}>
                  {val?.icon || <span style={{ marginLeft: '20px' }} />}
                  {val?.title}{' '}
                  {val?.innerMenu &&
                    (currentOpen !== i ? (
                      <FaAngleRight />
                    ) : (
                      <FaAngleDown />
                    ))}{' '}
                </AccordionItemButton>
              </AccordionItemHeading>
              {val?.innerMenu && (
                <AccordionItemPanel style={{ marginLeft: '2px' }}>
                  {val?.innerMenu.map((items) => (
                    <NavLink to={items?.pathName} className='link-text'>
                      <p>{items?.title}</p>
                      {location.pathname === items.pathName && <span />}
                    </NavLink>
                  ))}
                </AccordionItemPanel>
              )}
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default LeftDiv;
