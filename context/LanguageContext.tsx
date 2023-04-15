import { createContext } from "react";
import Language from "../types/Language";

const LanguageContext = createContext<Language>("en");

export default LanguageContext;
