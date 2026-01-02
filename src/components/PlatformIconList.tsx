import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import type { Platform } from '../types/game';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import type { IconType } from 'react-icons';

function PlatformIconList({ platforms }: Props) {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="platform-icon-list">
      {platforms.map((platform) => {
        const Icon = icons[platform.slug];
        return Icon ? <Icon key={platform.id} color="gray" /> : null;
      })}
    </div>
  );
}

interface Props {
  platforms: Platform[];
}

export default PlatformIconList;
