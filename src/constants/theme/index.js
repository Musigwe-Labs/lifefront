import { extendTheme } from "@chakra-ui/react";
import { Button, Heading, Input } from "./components";
import { styles } from "./styles";
import { colors, fontSizes } from "./default";

export const theme = extendTheme({
    colors,
    fontSizes,
    components: {
        Button,
        Heading,
        Input
    },
    styles
})