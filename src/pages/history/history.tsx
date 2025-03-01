import { TextField, Autocomplete, Card, CardContent } from "@mui/material";
import { collection } from "../favorites/collectionMovies";

function History() {
  return (
    <Card>
      <CardContent>
        <Autocomplete
          disablePortal
          options={collection.map((item) => {
            return { id: item.Title, label: item.Title };
          })}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Поиск фильмов" />
          )}
        />
      </CardContent>
    </Card>
  );
}

export default History;
