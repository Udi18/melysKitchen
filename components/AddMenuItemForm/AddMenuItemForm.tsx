import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { useNewDish, NewDish } from "../../atoms/newDish";

export default function AddMenuItemForm() {
  const [newDish, setNewDish] = useNewDish();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameOfField = event.target.name as keyof NewDish;
    setNewDish((dish) => {
      // @ts-ignore
      dish[nameOfField] =
        nameOfField === "price" ? +event.target.value : event.target.value;
    });
  };
  const createNewDish = () => {
    try {
      const response = fetch("/api/insertDish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDish),
      });
    } catch (error) {
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
          value={newDish.price || ""}
        />
        <RadioGroup
          aria-labelledby="food-type-radio-group"
          value={newDish.type}
          name="food-type-radio-group"
          row
        >
          <FormControlLabel
            value="entre"
            control={<Radio onChange={handleChange} />}
            label="Entre"
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
          id="image-input"
          variant="outlined"
          inputProps={{ accept: "image/*", type: "file" }}
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
    </>
  );
}
