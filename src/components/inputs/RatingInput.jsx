import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';

const RatingInput = ({response , setResponse , fieldId}) => {

    const [value, setValue] = React.useState(0);

        console.log(response)

          return (
            <div className={"flex justify-center mt-2 mb-1"}>
              <Rating
                  name={fieldId}
                  value={value}
                  onChange={(event, newValue) => {
                      setResponse && setResponse({...response , [fieldId] : newValue.toString() + "/5"})
                      setValue(newValue)
                  }}
                  />
            </div>
          );
        }

export default RatingInput;
