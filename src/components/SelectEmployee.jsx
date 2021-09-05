import FormControl from "@material-ui/core/FormControl";
import {FormHelperText, InputLabel, MenuItem, Select} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    borderColor: "red"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SelectEmployee = ({employees , selected , setSelected , isError}) =>{

  const classes = useStyles();

  return (
    <div className="w-full">
      <FormControl variant="outlined" className={classes.formControl + " flex justify-center items-center"}>
        <InputLabel id="demo-simple-select-outlined-label">Select user</InputLabel>
        <Select
            error={isError}
            className={"w-72"}
            labelId="demo-simple-select-outlined-label"
            id="select user"
            value={selected}
            onChange={e => setSelected(e.target.value)}
            label="Select user"
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {
            employees.map(employee => <MenuItem key={employee} value={employee}>{employee}</MenuItem>)
          }
        </Select>
        <FormHelperText>{isError ? "Please select name from here" : "Required*"}</FormHelperText>
      </FormControl>
    </div>
  )
};

export default SelectEmployee;