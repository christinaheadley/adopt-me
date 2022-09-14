import { createContext } from "react";

// mimics const [theme, setTheme = useState("darkblue")]
// Also, don't have to put args inside createContext, it's for TS (and VS Code)
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
