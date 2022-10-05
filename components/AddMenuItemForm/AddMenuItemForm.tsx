import {
  Alert,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { newDishResetObject, useNewDish } from "../../atoms/newDish";
import { useState } from "react";

export default function AddMenuItemForm() {
  const [newDish, setNewDish] = useNewDish();
  const [alert, setAlert] = useState<string | undefined>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameOfField = event.target.name as keyof NewDish;
    setNewDish((dish) => {
      // @ts-ignore
      dish[nameOfField] =
        nameOfField === "price" ? +event.target.value : event.target.value;
    });
  };
  const clearAlert = () => {
    setAlert(undefined);
  };
  const createNewDish = async () => {
    try {
      const response = await fetch("/api/insertDish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDish),
      });
      if (response.status === 200) {
        setAlert(`Successfully added ${newDish.name} to the full menu`);
        setNewDish({ ...newDishResetObject });
      } else {
        throw new Error();
      }
    } catch (error) {
      setAlert(`Failed adding ${newDish.name} to the full menu`);
      console.error(error);
    }
  };
  const disabled =
    !newDish.name || !newDish.price || !newDish.type || !newDish.size;
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
        <Box my={4}>
          <DinnerDiningIcon fontSize="large" />
        </Box>
        <TextField
          onChange={handleChange}
          fullWidth
          id="name-input"
          label="Name"
          variant="outlined"
          name="name"
          value={newDish.name}
        />
        <TextField
          onChange={handleChange}
          fullWidth
          id="description-input"
          label="Description"
          variant="outlined"
          name="description"
          value={newDish.description}
        />
        <TextField
          onChange={handleChange}
          fullWidth
          id="size-input"
          label="Size"
          variant="outlined"
          name="size"
          value={newDish.size}
        />
        <TextField
          onChange={handleChange}
          fullWidth
          id="price-input"
          label="Price"
          variant="outlined"
          type="number"
          name="price"
          value={newDish.price}
        />
        <RadioGroup
          aria-labelledby="food-type-radio-group"
          value={newDish.type}
          name="food-type-radio-group"
          row
        >
          <FormControlLabel
            value="entree"
            control={<Radio onChange={handleChange} />}
            label="Entree"
            name="type"
          />
          <FormControlLabel
            value="dessert"
            control={<Radio onChange={handleChange} />}
            label="Dessert"
            name="type"
          />
          <FormControlLabel
            value="side"
            control={<Radio onChange={handleChange} />}
            label="Side"
            name="type"
          />
          <FormControlLabel
            value="drink"
            control={<Radio onChange={handleChange} />}
            label="Drink"
            name="type"
          />
        </RadioGroup>
        <TextField
          onChange={handleChange}
          fullWidth
          id="imageLink-input"
          variant="outlined"
          name="imageLink"
          value={newDish.imageLink}
        />
        <Button
          disabled={disabled}
          onClick={createNewDish}
          fullWidth
          variant="contained"
        >
          Add Item
        </Button>
      </Box>
      <Snackbar open={!!alert} autoHideDuration={6000} onClose={clearAlert}>
        <Alert onClose={clearAlert} severity="error" sx={{ width: "100%" }}>
          {alert}
        </Alert>
      </Snackbar>
    </>
  );
}
