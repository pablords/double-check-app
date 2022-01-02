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
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";

import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faEnvelope,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../assets/double-check.png";
import backImage from "../../../../assets/back.jpg";
import { useTheme } from "@material-ui/core/styles";

interface IUserData {
  name: string;
  email: string;
  matricula: string;
  role: string;
  password: string;
}

interface IRegisterProps {
  saveUser: (user: IUserData) => void;
  loading: boolean
  error: boolean
  open: boolean
}

export function Register({ saveUser, loading, error, open }: IRegisterProps) {
  const styles = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeRole = (event: React.ChangeEvent<{ value: any }>) => {
    setRole(event.target.value);
  };

  const handleSignup = () => {
    const user: IUserData = {
      name: name,
      email: email,
      matricula: matricula,
      role: role,
      password: password,
    };
    saveUser(user);
  };

  return (
    <Grid container>
      <Grid item md={4} xs={12}>
        <Box className={styles.container}>
          <img src={logo} alt="logo" width={70} />
          <Typography style={{ color: "#2c2c2c" }} variant="h6">
            DoubleCheck
          </Typography>
          <FormControl className={styles.form}>
            <TextField
              type="text"
              className={styles.input}
              label="Nome"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faUser} color="#2c2c2c" />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              type="email"
              className={styles.input}
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faEnvelope} color="#2c2c2c" />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl variant="standard" style={{ minWidth: 250 }}>
              <InputLabel id="demo-simple-select-standard-label">Perfil</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Perfil"
                value={role}
                onChange={handleChangeRole}
                className={styles.input}
              >
                <MenuItem value="">Selecione um Perfil</MenuItem>
                <MenuItem value="staff">Staff</MenuItem>
                <MenuItem selected value="tecnico">Técnico</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="text"
              className={styles.input}
              label="Matricula"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faIdBadge} color="#2c2c2c" />
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
              onClick={() => handleSignup()}
            >
              Registrar
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
