import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { getMenuIcon } from './_config/get-menu-icon';
import { mq } from './_shared/media';
import { StyledIndexNumber } from './_shared/styled-index-number';
import { flexCenter } from './_shared/styled-mixins';

const StyledNav = styled.nav`
  background-color: var(--bg-content-color);
  border-top: 1px solid var(--border-color);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--header-height);

  ${mq.gt.sm} {
    display: none;
  }
`;
const StyledNavLink = styled(Link)`
  ${flexCenter};
  flex-direction: column;
  flex-shrink: 1;
  text-decoration: none;
  color: var(--title-color) !important;
  font-size: 0.8rem;
  line-height: 1;
  position: relative;
  height: var(--header-height);

  > svg {
    margin-bottom: 0.4rem;
    fill: var(--title-color);
  }

  &.active {
    font-weight: 700;
    border-bottom: none !important;
    border-top: 2px solid var(--link-color);

    & > svg {
      fill: var(--link-color);
    }
  }
  &:hover {
    color: var(--link-color) !important;

    & > svg {
      fill: var(--link-color);
    }
  }
`;

// Note: The NavigationBar component should only be used for up to 5 menu links
const NavigationBar = ({ menuLinks }) => {
  return (
    <StyledNav>
      {menuLinks.map((link, index) => (
        <StyledNavLink key={link.name} to={link.link} activeClassName="active">
          {getMenuIcon(link.name)}
          <div>
            <StyledIndexNumber>{`${String(index + 1).padStart(2, '0')}.`}</StyledIndexNumber>
            {link.name}
          </div>
        </StyledNavLink>
      ))}
    </StyledNav>
  );
};

const menuLinksPropTypeShape = PropTypes.shape({
  name: PropTypes.string,
  link: PropTypes.string,
});

NavigationBar.propTypes = {
  menuLinks: PropTypes.arrayOf(menuLinksPropTypeShape).isRequired,
};

export default NavigationBar;