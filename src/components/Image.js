import { Box, Button, FormControl, FormHelperText, FormLabel} from '@mui/material';
import React from 'react';
import PreviewImg from '../PreviewImg';

 const Image = (props)=>{
  const {setFieldValue, values, name, label, errors, touched, handleBlur, setFieldTouched}= props;
  const fileRef= React.useRef(null);
  const handleClick= ()=>{
    fileRef.current.click();
    setFieldTouched(name, true);
  }
  return(
    <>
  <FormControl error={touched[name] && Boolean(errors[name])} sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
    <Box sx={{flexBasis: "20%"}}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormHelperText sx={{mx:0}}>{touched[name] && Boolean(errors[name]) ? errors[name] : "Upload an image"}</FormHelperText>
    </Box>
    <input type="file" hidden ref={fileRef} name={name} onBlur={handleBlur} onChange={(e)=> setFieldValue(name, e.target.files[0])} />
    <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", flexBasis: "20%", alignItems: "center"}}>
      {Boolean(!errors[name]) && values[name] && <PreviewImg sx={{flexBasis: "30%"}} file={values[name]} alt="..." />}
      <Button variant="outlined" onClick={handleClick} sx={{height: "30px"}}>{values[name] ? "Change": "Upload"}</Button>
    </Box>
  </FormControl>
  <hr />
  </>
  )
 }

export default Image;