import { useState} from "react"

const Logindata = validate =>{
    const [values, setValues ] = useState({
        username: '',
        email: '',
        password: '',
        cpassword:''
    });
 
const [errors, setErrors] = useState({})


const handleChange = e =>{
    const{name, value} = e.target;

    setValues({
        ...values,[name] : value
    });
};

const handleSubmit = (e) =>{
    e.preventDefault();

    setErrors(validate(values));
    
}

return {handleChange, values, handleSubmit, errors};
}

export default Logindata;