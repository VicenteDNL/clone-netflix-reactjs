import './style.css';

import React from 'react';

import { User } from '../../../../types';

interface ProfileCardProps {
  profile: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => (
  <div className="card-avatar">
    <div className="container-image-avatar">
      <img src={profile.avatar} className="image-avatar" alt="" />
    </div>
    <span>{profile.name}</span>
  </div>
);

export default ProfileCard;
