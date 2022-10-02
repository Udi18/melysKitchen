import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";

export default function AddMenuItemForm() {
  return (
    <>
      <Box
        sx={{
          p: 2,
          lineHeight: 4,
          textAlign: "center",
          flex: 1,
        }}
      >
        <Box my={10}>
          <DinnerDiningIcon fontSize="large" />
        </Box>
        <TextField fullWidth id="name-input" label="Name" variant="outlined" />
        <TextField
          fullWidth
          id="description-input"
          label="Description"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="price-input"
          label="Price"
          variant="outlined"
          type="number"
        />
        <RadioGroup
          aria-labelledby="food-type-radio-group"
          defaultValue="entre"
          name="food-type-radio-group"
          row
        >
          <FormControlLabel value="entre" control={<Radio />} label="Entre" />
          <FormControlLabel
            value="dessert"
            control={<Radio />}
            label="Dessert"
          />
          <FormControlLabel value="side" control={<Radio />} label="Side" />
          <FormControlLabel value="drink" control={<Radio />} label="Drink" />
        </RadioGroup>
        <TextField
          fullWidth
          id="image-input"
          variant="outlined"
          inputProps={{ accept: "image/*", type: "file" }}
        />
        <Button fullWidth variant="contained">
          Add Item
        </Button>
      </Box>
    </>
  );
}
