import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  
  appBar: {
    borderRadius: 15,
    padding: '10px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background:'#e4d7b5'
  },
  heading: {
    color: '#8A7E6E',
  },
  image: {
    marginLeft: '15px',
    borderRadius:'20%'
  },
}));