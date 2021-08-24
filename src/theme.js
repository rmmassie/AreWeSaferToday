import { createTheme }  from '@material-ui/core/styles'
const theme = createTheme({
    palette: {
        primary: {
          light: '#708690',
          main: '#445963',
          dark: '#1b3039',
          contrastText: '#000000'
        },
        secondary: {
          light: '#ffffff',
          main: '#ededed',
          dark: '#bbbbbb',
          contrastText: '#ffffff',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
})
export default theme