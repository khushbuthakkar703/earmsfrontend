import moment from 'moment';

const convertDate = (date) => {
  if (date) {
    const [day, month, year] = date.split('-');
    const result = [year, month, day].join('-');
    return result;
  }
};
export const dateConversion = (date) => {
  if (date) {
    const [day, month, year] = date.split('/');
    const result = [year, month, day].join('-');
    console.log(result,"REEEEE");
    return result;
  }
};

export const formatDateForRequest = (date) => {
  const currentDate = date;
  const [yy, mm, dd] = currentDate?.split('-');
  const newDate = `${dd}/${mm}/${yy}`;
console.log(newDate,"DDDAAAOEO");

  return newDate;
};

export const dateConverter = (date)=>{
  const newDate = new Date(date);
  const val = moment(newDate).format('dd/mm/yyyy')
const mon = newDate.getMonth() + 1;
const day = newDate.getDate();
const year = newDate.getYear() + 1900;
const result = `${day}/${mon}/${year}`;
console.log(val,"DDDAAAOEO");
return result
}
export const currentDate = (date)=>{
  const value  = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  console.log(value,"OOO");
  return value
}

export const datePrefillFormat = (data)=>{
  const  startDate = new Date(data);
  const resultDate = moment(startDate).format("YYYY-MM-DD");
  console.log('DATEE',resultDate);
  return resultDate
}

export  const formatPrefill = (data)=>{
  const [day, month, year] = data?.split('/');
  let val= month + '/' + day + '/' + year;
  const  startDate = new Date(val);
  const resultDate = moment(startDate).format("YYYY-MM-DD");
  console.log('DATEE',resultDate);
  return resultDate
}

export const  dateCheck=(from,to,check)=> {

  var fDate,lDate,cDate;
  fDate = Date.parse(from);
  lDate = Date.parse(to);
  cDate = Date.parse(check);

  if((cDate <= lDate && cDate >= fDate)) {
      return true;
  }
  return false;
}
export default convertDate;
