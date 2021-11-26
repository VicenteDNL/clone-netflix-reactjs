import img_avatar001 from '../../assets/img/avatar/001.png';
import img_avatar002 from '../../assets/img/avatar/002.png';
import img_avatar003 from '../../assets/img/avatar/003.png';
import img_avatar004 from '../../assets/img/avatar/004.png';
import { User } from '../../types';

export const profilesList = (): Promise<Array<User>> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { name: 'Isabela Caroline', avatar: img_avatar001, id: '1' },
        { name: 'Daniel Saraiva', avatar: img_avatar002, id: '2' },
        { name: 'Danilo Saraiva', avatar: img_avatar003, id: '3' },
        { name: 'Darcylene Saraiva', avatar: img_avatar004, id: '4' },
      ]);
    }, 500);
  });
