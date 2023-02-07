import * as yup from 'yup'


export const authLoginValidatorSchema = (details)=>{
    const schema = yup.object().shape({
        email: yup.string().email().required('Email is required'),
        password: yup.string().required('Password is required!')
    })

    return schema.validate(details)
}

export const    authRegisterValidatorSchema = (details)=>{
    const schema = yup.object().shape({
        username: yup.string().required('Please include username'),
        email: yup.string().email().required('Email is reuired'),
        password: yup.string().min(8, 'Password has to be longer than 8 characters!').required('Password is required!')
    })
    return schema.validate(details)
}