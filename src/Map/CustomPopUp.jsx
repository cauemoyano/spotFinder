import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";

const CustomPopUp = ({ attraction }) => {
  const { name, wikidata } = attraction;
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.wikidata.org/w/api.php?action=wbgetclaims&property=P18&entity=${wikidata}&origin=*&format=json`
      )
      .then((res) => {
        const image = res.data.claims.P18[0].mainsnak.datavalue.value
          ? res.data.claims.P18[0].mainsnak.datavalue.value.replace(/\s/g, "_")
          : null;
        if (image) {
          setImage(
            `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${image}`
          );
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        fontSize: "22px",
        width: "20vw",
        background: "white",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {image && (
            <img
              src={image}
              width={"100%"}
              style={{ height: "15vh" }}
              alt={name}
            />
          )}
        </Grid>
        <Grid item xs={6}>
          <p style={{ margin: "0.2rem 0", fontSize: "1rem" }}>{name}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomPopUp;
