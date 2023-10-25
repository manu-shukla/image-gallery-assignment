import {Container, IconButton, Input, InputAdornment, OutlinedInput, Switch, TextField} from "@mui/material";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import {useThemeContext} from "../../contexts/themeContext"

const Navbar = ({search, setSearch}) => {

    const {theme, setTheme} = useThemeContext();


    return (
        <div className={`nav-container-${theme}`}>
            <h2 style={{color: `${theme==="light" ? "black" : "white"}`}}>The Minimalist Gallery</h2>
            <TextField
                placeholder={"Search an Image"}
                className={`search-input-${theme}`}
                variant="outlined"
                value={search}

                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            {
                theme === "light" ? (<IconButton onClick={() => setTheme("dark")}>
                    <NightsStayIcon className={"themeIcons"} style={{color: "black", fontSize: "2rem"}}/>

                </IconButton>) : (<IconButton onClick={() => setTheme("light")}>
                    <WbSunnyIcon className={"themeIcons"} style={{color: "white", fontSize: "2rem"}}/>

                </IconButton>)
            }

        </div>
    );
}

export default Navbar;
