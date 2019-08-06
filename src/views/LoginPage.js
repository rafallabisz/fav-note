import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({ authenticate, userID }) => {
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          authenticate(username, password);
        }}
      >
        {({ handleChange, handleBlur, values }) => {
          console.log(userID, 'userID');
          // if (userID) {
          //   return <Redirect to={routes.home} />;
          // }
          return (
            <>
              <Heading>Sign in</Heading>
              <StyledForm>
                <StyledInput
                  name="username"
                  type="text"
                  placeholder="Login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />

                <StyledInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <Button activeColor="notes" type="submit">
                  sign in
                </Button>
              </StyledForm>
              <StyledLink to={routes.register}>I want my account!</StyledLink>
            </>
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
