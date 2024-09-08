import { defineStyleConfig } from '@chakra-ui/react'

export const buttonTheme = defineStyleConfig({
    // Styles for the base style
    baseStyle: {
        borderRadius: '37px',
    },
    // Styles for the size variations
    sizes: {
        lg: {
            fontSize: 'xl',
            padding: '10px 24px'
        },
        md: {
            padding: '18px 24px',
        },
    },
    // Styles for the visual style variations
    variants: {
        solid: (props) => ({
            bg: `${props.colorScheme}.200`,
            color: 'white',
            width: '100%',
            _hover: { bg: `${props.colorScheme}.200` },
            _active: { bg: `${props.colorScheme}.200` },
            _disabled: { bg: `${props.colorScheme}.200` },
        }),
        outline: { 
            bg: 'black.200', 
            color: 'neutral.100', 
            borderWidth: '2px', 
            borderColor: '#F6853799',
            // _hover: { bg: 'black.200' },
            // _active: { bg: 'neutral.900' },
         },
    },
    // The default `size` or `variant` values
    defaultProps: {
        colorScheme: 'purple',
        size: 'lg'
    },
})