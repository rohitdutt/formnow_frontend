import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const DropdownInput = ({response , setResponse , fieldId}) => {

    console.log(response)
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event) => {
        console.log(fieldId)
        setResponse && setResponse({...response , [fieldId.fieldName] : event.target.value})
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Select One</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={selectedValue}
                    onChange={handleChange}
                >
                    {
                        fieldId && fieldId.options.map(option => (
                            <MenuItem key={option.fieldValue} value={option.fieldValue}>{option.fieldValue}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    );
}

export default DropdownInput;
