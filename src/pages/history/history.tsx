import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { clearHistory } from "@store/historySlice";
import { useNavigate } from "react-router-dom";
import { URLs } from "@utils/constants/constants";
import historyStyles from "./history.module.css";

export const History: React.FC = () => {
  const history = useSelector((state: RootState) => state.history.history);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectHistory = (query: string) => {
    navigate(URLs.HOME_PAGE, { state: { searchQuery: query } });
  };

  return (
    <div className={historyStyles.container}>
      <Typography
        variant="h2"
        component="div"
        color="white"
        className={historyStyles.title}
      >
        История поиска
      </Typography>
      <Card
        className={historyStyles.card}
        variant="outlined"
        sx={{
          backgroundColor: "rgba(173, 255, 47, .7)",
          borderRadius: "10px",
          padding: "20px",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <CardContent>
          {history.length > 0 ? (
            <>
              <List className={historyStyles.list}>
                {history.map((entry) => (
                  <ListItemButton
                    key={entry.id}
                    className={historyStyles.listItem}
                    onClick={() => handleSelectHistory(entry.query)}
                  >
                    <ListItemText
                      primary={entry.query}
                      secondary={entry.timestamp}
                      classes={{ primary: historyStyles.listItemText }}
                    />
                  </ListItemButton>
                ))}
              </List>
              <Button
                className={historyStyles.clearButton}
                onClick={() => dispatch(clearHistory())}
              >
                Очистить историю
              </Button>
            </>
          ) : (
            <Typography variant="h5" className={historyStyles.noHistory}>
              У вас нет истории запросов
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
