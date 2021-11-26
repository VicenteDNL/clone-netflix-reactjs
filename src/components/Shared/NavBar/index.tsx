import './index.css';

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as LogoSVG } from '../../../assets/svg/logo_netflix.svg';
import {
  cleanLoading,
  getContrastMovie,
  getListMovieByGenres,
  getProfilesList,
} from '../../../storeConfig/actions';
import { State } from '../../../storeConfig/rootReducer';
import { User } from '../../../types';

const NavBar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', avatar: '', id: '' });
  const dispatch = useDispatch();
  const profilesLists = useSelector((state: State) => state.profilesLists);

  useEffect(() => {
    dispatch(getProfilesList());
    const user = localStorage.getItem('@clone-netflix/user');
    if (user !== null) {
      setUser(JSON.parse(user));
    } else {
      navigate('/browser');
    }
  }, []);

  const handleChangeProfile = (profile: User) => {
    localStorage.setItem('@clone-netflix/user', JSON.stringify(profile));
    setUser(profile);
    dispatch(cleanLoading('CONTRAST_MOVIE'));
    dispatch(cleanLoading('LIST_MOVIES'));
    dispatch(cleanLoading('PROFILE_LIST'));
    dispatch(getListMovieByGenres());
    dispatch(getContrastMovie());
  };

  return (
    <nav className="nav-base">
      <div className="nav-container-logo">
        <LogoSVG />
      </div>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isactive={isOpen.toString()}>
              <Flex alignItems="center">
                <Image
                  boxSize="2rem"
                  borderRadius="5px"
                  srcSet={user.avatar}
                  alt={user.name}
                  mr="7px"
                />
                {isOpen ? (
                  <TriangleUpIcon w={3} h={3} />
                ) : (
                  <TriangleDownIcon w={3} h={3} />
                )}
              </Flex>
            </MenuButton>
            <MenuList bgColor="#000000cc">
              <MenuGroup>
                {profilesLists?.list
                  .filter(profile => profile.id !== user.id)
                  .map(profile => (
                    <MenuItem
                      minH="48px"
                      _focus={{ bg: '#313131' }}
                      key={profile.id}
                      onClick={() => {
                        handleChangeProfile(profile);
                      }}>
                      <Image
                        boxSize="2rem"
                        borderRadius="5px"
                        srcSet={profile.avatar}
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <span>{profile.name}</span>
                    </MenuItem>
                  ))}
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Configurações">
                <MenuItem _focus={{ bg: '#313131' }}>Conta</MenuItem>
                <MenuItem _focus={{ bg: '#313131' }}>Central de ajuda</MenuItem>
                <MenuItem _focus={{ bg: '#313131' }}>Sai da Netflix</MenuItem>
              </MenuGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </nav>
  );
};

export default NavBar;
