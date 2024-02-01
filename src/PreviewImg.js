import React from 'react';
import { Box } from '@mui/material';

const PreviewImg = ({file}) => {
    const [preview, setPreview]= React.useState(null);
    if (file instanceof Blob || file instanceof File){
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload= ()=> {
      setPreview(reader.result);
    }
    }

  return (
    <Box>
      {preview && <img width="100px" height="100px" src={preview} alt="..." />}
    </Box>
  )
}

export default PreviewImg;
