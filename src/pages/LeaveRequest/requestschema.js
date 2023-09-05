import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    leaveType: yup.string().required(),
    leaveReason: yup.string().required(),
  })
  .required();

export default schema;
