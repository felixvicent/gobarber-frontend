import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-purple.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Félix Vicente</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://ui-avatars.com/api/?name=Félix+Vicente"
              alt="Félix Vicente"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
