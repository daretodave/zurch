import {putLink, UnaryType} from "../do";

export const upper = putLink(
    "upper", value => value.toUpperCase(), UnaryType.STRING);
export const trim  = putLink(

    "trim", value => value.trim(), UnaryType.STRING);

