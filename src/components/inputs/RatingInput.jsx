import React, { useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const RatingInput = ({response , setResponse , fieldId}) => {

    const [value, setValue] = React.useState(0);

    useEffect(()=>{
        setResponse({...response , [fieldId] : value})
    },[value]);

    return ( 
        <>
            <div className={"flex justify-center"}>
                <Box component="fieldset" mb={0} borderColor="transparent">
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                </Box>
            </div>
        </>
    );
}
 
export default RatingInput;