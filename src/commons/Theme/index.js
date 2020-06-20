// cai gi dung chung dua vao commons
// muon thay doi mau sac thi vao theme thay doi
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#1976D2',
    secondary: '#FF4081',
    error: '#D32F2F',
    textColor: '#ffffff',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    backgroundColor: '#4CAF50',
    textColor: '#ffffff',
    borderRadius: 4,
    border: '#cccccc',
  },
});
export default theme;
