import moment from 'moment';

export function getExpiryState(expires: Date){
  let expiresIn = moment(expires).diff(moment(), 'weeks')
  console.log(expiresIn)
  if(expiresIn < 2 && expiresIn > 0){
    return 'EXPIRING';
  }else if(expiresIn <= 0){
    return 'EXPIRED';
  }else{
    return 'VALID'
  }
}

export function getExpiryColor(expires: Date){
  let state = getExpiryState(expires);
  switch(state){
    case 'EXPIRED':
      return 'rgba(255, 0, 0, 1)';
    case 'EXPIRING':
      return 'rgba(255, 121, 0, 1)';
    case 'VALID':
      return 'rgba(0, 0, 0, 1)';
    default:
      return null;
  }
}
