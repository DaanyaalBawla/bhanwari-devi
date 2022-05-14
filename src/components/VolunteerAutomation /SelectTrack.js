import React, { useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Button,
  Image,
  CardMedia,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";
import { breakpoints } from "../../theme/constant";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { actions as pathwayActions } from "../PathwayCourse/redux/action";
import useStyles from "./styles";
import { maxWidth } from "@mui/system";

function SelectTrack() {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
  const classes = useStyles();

  const { data } = useSelector((state) => state.Pathways);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pathwayActions.getPathways());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Container maxWidth="sm" mb={3}>
        <Typography variant="h6" align="left" mb={2}>
          Please choose what you’d like to teach
        </Typography>
        <Typography variant="body1" align="left" color="text.secondary">
          We recommend giving about 2 hours per week for about 15 weeks duration
        </Typography>

        <Grid container columnSpacing={isActive ? 2 : 0} mt={2} mb={2}>
          {data &&
            data.pathways &&
            data.pathways.map((item) => {
              if (item.name == "Python" || item.name == "Spoken English") {
                return (
                  <Grid item xs={6} ms={6} md={6}>
                    <Card className={classes.TrackCard}>
                      <Box className={classes.TrackImages}>
                        <CardMedia component="img" src={item.logo} />
                        <Typography mt={2}>{item.name}</Typography>
                      </Box>
                    </Card>
                  </Grid>
                );
              }
            })}
        </Grid>

        <Box className={classes.TrackButtonBox}>
          <Button
            variant="text"
            startIcon={<ArrowBackIosIcon />}
            sx={{
              color: "#6D6D6D",
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
          >
            Next Step
          </Button>
        </Box>
      </Container>
    </Container>
  );
}

export default SelectTrack;
