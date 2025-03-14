import { CardDataForPopup, MovieDetail } from "@utils/types/types";

export function generateMovieDetails(data: CardDataForPopup): MovieDetail[] {
  return [
    { label: "Title", value: data.Title },
    { label: "Year", value: data.Year },
    { label: "Genres", value: data.Genre },
    { label: "Director", value: data.Director },
    { label: "Casts", value: data.Actors },
    { label: "Country", value: data.Country },
    { label: "IMD Rating", value: data.Ratings[0]?.Value },
  ];
}
