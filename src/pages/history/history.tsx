import { TextField, Autocomplete, Card, CardContent } from "@mui/material";
import { collection } from "../../mock/collectionMovies";
import { useMemo } from "react";

function History() {
  const options = useMemo(() => {
    return collection.map((item) => {
      return { id: item.Title, label: item.Title };
    });
  }, []);
  return (
    <Card>
      <CardContent>
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField {...params} label="Поиск фильмов" />
          )}
        />
      </CardContent>
    </Card>
  );
}

export { History };
