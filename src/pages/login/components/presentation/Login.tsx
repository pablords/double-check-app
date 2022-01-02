import React, { useState } from "react";
import {
  Typography,
  FormControl,
  TextField,
  InputAdornment,
  Box,
  Grid,
  useMediaQuery,
  Button,
  CircularProgress,
} from "@material-ui/core";

import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../assets/double-check.png";
import backImage from "../../../../assets/back.jpg";
import { useTheme } from "@material-ui/core/styles";



interface ICreditalsUser {
  matricula: string;
  password: string;
}

interface ILoginProps {
  validatedLogin: (credentials: ICreditalsUser) => void;
  loading: boolean
  error: boolean,
  open: boolean
}

export function Login({ validatedLogin, loading, error, open }: ILoginProps) {

  const styles = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");


  const handleSignin = () => {
    const user: ICreditalsUser = {
      matricula: matricula,
      password: password,
    };
    validatedLogin(user);
  };

  return (
    <Grid container>
      <Grid item md={4} xs={12}>
        <Box className={styles.container}>
          <img src={logo} alt="logo" width={70} />
          <Typography
            style={{ color: "#2c2c2c", marginBottom: 16 }}
            variant="h6"
          >
            DoubleCheck
          </Typography>
          <FormControl className={styles.form}>
            <TextField
              type="text"
              className={styles.input}
              label="Matricula"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faUser} color="#2c2c2c" />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setMatricula(e.target.value)}
            />

            <TextField
              type="password"
              className={styles.input}
              label="Senha"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faKey} color="#2c2c2c" />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
            />

            {loading && <CircularProgress />}

            <Button
              variant="contained"
              color="primary"
              style={{
                paddingRight: 50,
                paddingLeft: 50,
                marginTop: 30,
              }}
              onClick={() => handleSignin()}
            >
              Acessar
            </Button>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={() => open}
              message={error}
            />
          </FormControl>
        </Box>
      </Grid>
      <Grid
        item
        md={8}
        style={
          sm
            ? { display: "none" }
            : {
              backgroundImage: `url("${backImage}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
        }
      />
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    padding: 16,
    gap: 16,
  },
  input: {
    width: "100%"
  },
}));
