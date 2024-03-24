import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  
  appBar: {
    borderRadius: 15,
    padding: '15px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background:'#e4d7b5'
  },
  heading: {
    fontFamily:"Pacifico",
    color: '#8A7E6E',
    margin:'5px 10px'
  },
  image: {
    marginLeft: '15px',
    borderRadius:'20%'
  },
}));