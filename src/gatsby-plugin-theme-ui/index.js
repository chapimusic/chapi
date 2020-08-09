import {tailwind} from '@theme-ui/presets'
import './custom.css'
import './reset.css'

export default {
  ...tailwind,
  breakpoints: ['640px', '768px', '1024px', '1216px', '1600px'],
  colors: {
    //...tailwind.colors,
    primary: '#260d34',
    secondary: '#F2E9DF',
    white: '#fff',
    black: '#1B171C',
    text: '#10001A',
    background: 'white',
    green: '#9ac467',
    darkblue: '#0b6881',
    lightblue: '#c2d9f1',
    red: ['#e10f21', '#cb1a3b'],
    pink: '#bf5e9e',
    purple: '#814490',
    orange: '#ed7c20',
    gray: '#444',
    muted: '#ccc',
  },
  fonts: {
    ...tailwind.fonts,
  },
  buttons: {
    ...tailwind.buttons,
    primary: {
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      bg: 'primary',
      color: 'white',
      ':hover': {
        cursor: 'pointer',
        bg: 'red.0',
        color: 'white',
        boxShadow: '0px 1px 10px rgba(0,0,0,0.25)',
      },
    },
  },
  styles: {
    ...tailwind.styles,
    h1: {
      ...tailwind.styles.h1,
      //fontFamily: 'heading',
      fontFamily: '"Raleway", sans-serif',
      fontWeight: '100',
      fontSize: [5, 6, 7],
      textTransform: 'uppercase',
      letterSpacing: '4px',
      mt: 0,
      pt: 2,
    },
    raleway: {
      fontFamily: '"Raleway", sans-serif',
    },
    h2: {
      textTransform: 'uppercase',
      fontFamily: '"Raleway", sans-serif',
      fontWeight: '800',
      fontSize: [2, 2, 4, 5],
    },
    h3: {
      m: 0,
      p: 0,
      'margin-block-start': 0,
      'margin-block-end': 0,
    },
    root: {
      ...tailwind.styles.root,
      bg: 'white',
      'a,button': {
        ':focus': {outline: 0},
      },
      a: {
        color: 'primary',
      },
      form: {
        margin: 0,
      },
      p: {
        my: 2,
      },
      strong: {
        fontWeight: 'bold',
      },
    },
  },
  layout: {
    container: {
      bg: 'white',
    },
    main: {
      //minHeight: '50vh',
    },
    header: {
      a: {
        color: 'primary',
      },
    },
    menu: {
      desktop: {
        listStyle: 'none',
        li: {
          display: 'flex',
          px: 3,
          '&:not(:last-child)': {
            borderRight: '2px solid',
          },
          a: {
            p: 2,
            fontSize: 0,
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 'normal',
            transition: 'background-color 0.5s ease',
            '&:hover, &.active': {
              color: 'white',
              bg: 'primary',
              borderColor: 'primary',
            },
          },
        },
      },
      mobile: {
        bg: 'red.0',
        position: 'fixed',
        height: '100%',
        display: ['block', 'block', 'block', 'none'],
        p: 4,
        color: 'white',
        a: {
          color: 'white',
          textDecoration: 'none',
          py: 3,
          borderBottom: '1px solid',
          borderColor: 'rgba(255,255,255,0.125)',
        },
      },
    },
    footer: {
      bg: 'pink',
      color: 'white',
      a: {color: 'white'},
      p: 4,
      textAlign: 'center',
    },
  },
}
