import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoIcon from 'assets/icons/logo.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.nav`
  width: 150px;
  height: 100vh;
  padding: 25px 0;
  background-color: ${({ theme, pageType }) => (pageType ? theme[pageType] : theme.note)};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  height: 67px;
  width: 67px;
  background-image: url(${logoIcon});
  background-size: 80%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLinksList = styled.ul`
  list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageContext }) => {
  return (
    <StyledWrapper pageType={pageContext}>
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <li>
          <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
        </li>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} activeclass="active" />
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};
export default withContext(Sidebar);
