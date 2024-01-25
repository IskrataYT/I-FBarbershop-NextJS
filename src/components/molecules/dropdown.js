import { useState } from 'react';
import styles from './css/Dropdown.module.css'; // Assuming you have a CSS module for styles
import Button from '../atoms/button';


export default function Dropdown({ clickable, children, title }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        if (!clickable) {
            setIsOpen(true);
        }
    };

  const handleMouseLeave = () => {
        if (!clickable) {
            setIsOpen(false);
        }
    };

    const handleClick = () => {
        if (clickable) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={styles.dropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button onClick={handleClick}>
                {title}
            </Button>

            {isOpen && (
                <div className={styles.dropdownContent}>
                    {children}
                </div>
            )}
        </div>
    );
}


