import React, { Fragment, useState, useEffect } from "react";
import { Header } from "../../../components/header/Header";
import { useMediaQuery, LinearProgress } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { ListMobile } from "../../../components/list-mobile/ListMobile";

interface HomeProps {
  auditoria: Array<any>;
  historico: Array<any>;
}

export function Home(props: HomeProps) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Header />
      {loading ? (
        <LinearProgress />
      ) : (
        <Fragment>{isSm && <ListMobile {...props} />}</Fragment>
      )}
    </Fragment>
  );
}
