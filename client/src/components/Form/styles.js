import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  heading: {
    fontFamily: "Great Vibes",
    fontWeight: 'bold'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: '#FFFAE6',
    borderRadius:'10px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    color: '#FFFFFF',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
    margin: '10px 0',
  },
}));