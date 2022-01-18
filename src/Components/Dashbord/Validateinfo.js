export default function Validateinfo(values) {
    let errors = {}

    if(!values.username){
        errors.username ="Username is required";
      }
      if(!values.email){
        errors.email ="Email is required";
      }
      if(!values.password){
        errors.password ="Password is required";
      }
      else if (values.password.length<6){
        errors.password = "Password must be min 6 characters";
      }

      if(!values.cpassword){
        errors.cpassword =" Confirm Password is required";
      }
      else if (values.cpassword !== values.password){
        errors.cpassword = "Password does't match";
      }

      return errors;
}