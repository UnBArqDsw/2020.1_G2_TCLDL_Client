import AppBar from "../components/AppBar";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles/Profile.module.js";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { NaturePeopleOutlined } from "@material-ui/icons";
import Link from "next/link";
import Table from "../components/SubmissionTable";

export default function SubmissionProfile() {
  const style = useStyles();

  return (
    <div>
      <Container>
        <Grid container spacing={10}>
          <Grid sm={3}>
            <div className={style.boxTitlesSubmissions}>
              <div className={style.boxTitle}>
                <div className={style.titleText}>Submissions</div>
              </div>
              <div>
                <Link href="/profile">
                  <Button className={style.buttonText1}>Profile</Button>
                </Link>
              </div>
              <div>
                <Link href="/review-profile">
                  <Button className={style.buttonText1}>Review</Button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Table />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
