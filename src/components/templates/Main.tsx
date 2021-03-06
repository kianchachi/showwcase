import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { RouteProps, RouterProps, RouteComponentProps } from "react-router-dom";
import { setUserName } from "../../store/slices/userSlice";
import Container from "../atoms/Container";
import DisplaySchool from "../organisms/DisplaySchool";
import IntroSchool from "../organisms/IntroSchool";

const Main: FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Container variant="center">
        <IntroSchool />
        <DisplaySchool />
      </Container>
    </div>
  );
};

export default Main;
