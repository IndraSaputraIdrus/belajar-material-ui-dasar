import {
  Button,
  Container,
  Autocomplete,
  TextField,
  ButtonGroup,
  Checkbox,
  Fab,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Switch,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import {
  Add as AddIcon,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Navigation as NavigationIcon,
  VolumeDown,
  VolumeUp,
} from "@mui/icons-material";

import { Stack } from "@mui/system";
import { useState } from "react";

const mySkills = [
  { label: "javascript react", level: "beginner" },
  { label: "tailwindcss", level: "beginner" },
  { label: "html", level: "beginner" },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function App() {
  const [age, setAge] = useState("");

  const [formats, setFormats] = useState(() => ["bold", "italic"]);
  console.log("formats", formats);
  const handleFormat = (event, newFormats) => {
    console.log("new formats", newFormats);
    setFormats(newFormats);
  };
  return (
    <Container
      sx={{
        p: 5,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
      maxWidth="sm"
    >
      <div className="gap">
        <p>Button</p>
        <Button variant="contained">Variant Contained</Button>
        <Button variant="outlined">Variant Outlined</Button>
      </div>

      <div className="gap">
        <p>Autocomplete / comboBox</p>
        <Autocomplete
          options={mySkills}
          renderInput={(params) => <TextField {...params} label="skills" />}
        />
      </div>

      <div>
        <p className="mb-10">Button Group</p>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>

      <div>
        <p className="mb-10">Check Box</p>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>

      <div>
        <p className="mb-10">Floating Action Button</p>
        <Fab sx={{ mr: 2 }} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
      </div>

      <div>
        <p className="mb-10">Radion Button</p>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <p className="mb-10">Rating</p>
        <Rating name="read-only" value={3.5} precision={0.5} readOnly />
      </div>

      <div>
        <p className="mb-10">Select</p>
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={11}>Eleven</MenuItem>
            <MenuItem value={12}>Twelve</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <p className="mb-10">Slider</p>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="volume" />
          <VolumeUp />
        </Stack>
      </div>

      <div>
        <p className="mb-10">Switch</p>
        <Switch />
        <Switch defaultChecked />
      </div>

      <div className="gap">
        <p>Text Field</p>
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
        <TextField label="Multiline" multiline rows={4} />
      </div>

      <div>
        <p className="mb-10">Toggle Button</p>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </Container>
  );
}

export default App;
