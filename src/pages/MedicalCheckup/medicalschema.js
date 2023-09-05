import * as yup from 'yup';

const schema = yup.object().shape({
    selectcompany: yup.string().required(),
    selectbranch: yup.string().required(),
    selectdepat: yup.string().required(),
    selectstfcat: yup.string().required(),
    selectstaff: yup.string().required(),
    selectcheckupdate: yup.string().required(),
   
}).required();

export default schema;