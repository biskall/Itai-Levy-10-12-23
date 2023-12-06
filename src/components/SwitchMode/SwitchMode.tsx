import React, {useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import {modeActions} from '../../store/slice/modeSlice';
import  MaterialUISwitch from './Style';


function SwitchMode() {
  const mode = useAppSelector((state) => state.mode.value);
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(mode === "light" ? false : true);

  const handleChange = () => {
    dispatch(modeActions.changeMode());
    setIsChecked(!isChecked);
  };
    return (
      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} checked={isChecked} onChange={handleChange} />}
          label=""
        />
      </FormGroup>
  );
}

export default SwitchMode;