import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { Button } from "../ui/button";

const ThemeSwitcher = () => {
    const {theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{background: theme === 'light'}}>
            <p>Theme actuel : {theme}</p>
            <Button onClick={toggleTheme} variant="outline" className="mt-4 mb-4">
            Changer theme
            </Button>
        </div>
    )
}

export default ThemeSwitcher;