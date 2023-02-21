import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { paths } from "../../core/routes";
import styles from "./NotExist.module.css";
import { NotFoundImg } from "../../assets";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(paths.main());
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">Такой страницы не существует</Typography>
            <Button
              appearance="primary"
              onClick={onClickHandler}
              className={styles.btn}
            >
              Вернуться на главную
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src={NotFoundImg}
              alt="Страница не найдена"
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
