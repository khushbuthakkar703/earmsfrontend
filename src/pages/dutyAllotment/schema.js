import * as yup from 'yup';

const schema = yup.object().shape({
    selectshiftdate: yup.string().required(),
    selectcategory: yup.string().required(),
    selectshift: yup.string().required(),
    selectsex: yup.string().required(),
}).required();

export default schema;
