import{d as a,e as s,f as e,g as r,h as i}from"./index-DaRGSqwa.js";const d=a({name:e().min(3,"Name must be at least 3 characters").max(50,"Name cannot exceed 50 characters").required("Name is required"),email:e().email("Invalid email format").required("Email is required"),phone:e().matches(/^[6-9][0-9]{9}$/,"Please enter a valid phone number"),age:r().min(1,"Age cannot be less than 1").max(100,"Enter your real valid age").required("Age is required"),gender:e().oneOf(["male","female","others"]).required("Gender is required"),password:e().min(6,"Password must be at least 6 characters").max(20,"Password cannot exceed 20 characters").required("Password is required"),confirmPassword:e().oneOf([i("password")],"Passwords must match").required("Confirm Password is required"),heartRate:r().min(40,"heart rate cannot be less than 40").max(100,"heart rate cannot exceed 100").required("Heart rate is required"),bloodPressure:e().required("Blood pressure is required"),bloodSugar:r().min(80,"blood sugar cannot be less than 80").max(100,"blood sugar cannot exceed 200").required("Blood sugar is required"),height:r().min(90,"Height cannot be less than 90").max(245,"Height cannot exceed 245").required("Height is required"),weight:r().min(10,"Weight cannot be less than 10").max(200,"Weight cannot exceed 200").required("Weight is required"),temperature:r().min(80,"Temperature cannot be less than 80").max(115,"Temperature cannot exceed 115").required("Temperature is required"),otherConditions:e().notRequired(),privacyAndTerms:s().required("You must agree to Privacy & Terms to proceed").isTrue()}),n=a({email:e().email("Invalid email format").required("Email is required"),password:e().min(6,"Password must be at least 6 characters").max(20,"Password cannot exceed 20 characters").required("Password is required")});export{n as l,d as r};
