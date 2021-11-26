import './style.css';

import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { cleanLoading, getProfilesList } from '../../../storeConfig/actions';
import { State } from '../../../storeConfig/rootReducer';
import { User } from '../../../types';
import Loading from '../../Shared/Loading';
import ProfileCard from './ProfileCard';

const Browser: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profilesLists = useSelector((state: State) => state.profilesLists);
  const loading = useSelector((state: State) => state.loading);

  useLayoutEffect(() => {
    dispatch(getProfilesList());
    return () => {
      dispatch(cleanLoading('PROFILE_LIST'));
    };
  }, []);
  const handleAddUserAndNavigate = (profile: User) => {
    localStorage.setItem('@clone-netflix/user', JSON.stringify(profile));
    navigate('/');
  };

  return !loading.profiles ? (
    <section className="browser-container">
      <h1 className="browser-title">Quem está assistindo?</h1>
      <div className="browser-card-container">
        {profilesLists.list.map((profile: User) => (
          <button
            type="button"
            key={profile.id}
            className="remove-decoretion"
            onClick={() => handleAddUserAndNavigate(profile)}>
            <ProfileCard profile={profile} />
          </button>
        ))}
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default Browser;
