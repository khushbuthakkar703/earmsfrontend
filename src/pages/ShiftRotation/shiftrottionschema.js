import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    fromdate: yup.string().required(),
    todate: yup.string().required(),
    branch: yup.string().required(),
    department: yup.string().required(),
    category: yup.string().required(),
    weekoff: yup.string().required(),
    shift1: yup.string().required(),
    shift2: yup.string().required(),
    shift3: yup.string().required(),
   
  })
  .required();

export default schema;
