import React from 'react';
import Input from './components/Input';
import Textarea from './components/Textarea';
import Select from './components/Select';
import RadioButtons from './components/RadioButtons';
import CheckboxGroup from './components/CheckboxGroup';
import Image from './components/Image';
import MaterialUIDate from './components/MaterialUIDate';
import { DatePicker } from 'formik-mui-lab';

const FormikControl = (props) => {
    const {control, ...rest}= props;

    switch(control){
        case 'input': return <Input {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Select {...rest} />
        default: return;
    }
}

export default FormikControl;
