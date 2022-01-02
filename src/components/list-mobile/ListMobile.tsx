import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import {
  ListItem,
  Divider,
  ListItemSecondaryAction,
  IconButton,
  Box,
} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Assignment } from "@material-ui/icons";
import { format } from "date-fns";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface ListProps {
  auditoria: Array<any>;
  historico: Array<any>;
}

export function ListMobile(props: ListProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.auditoria.length <= 0 ? (
        <Typography style={{ margin: 10 }} variant="subtitle2">
          Você não possui atividades Pendentes
        </Typography>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding={2}
              marginBottom={-2}
            >
              <Typography variant="h6">Atividades</Typography>
              <IconButton edge="end" aria-label="delete">
                <Assignment />
              </IconButton>
            </Box>
            <List>
              {props.auditoria.map((e, key) => (
                <div key={key}>
                  <ListItem style={{ cursor: "pointer" }} >
                    <ListItemText primary={e.tipo} secondary={e.detalhe} />
                    <ListItemSecondaryAction>
                      <Typography variant="body2">
                        {format(new Date(e.data_abertura_tt), "dd/MM HH:mm")}
                      </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
