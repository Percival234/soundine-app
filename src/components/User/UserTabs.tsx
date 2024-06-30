import { NavLink } from 'react-router-dom';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { AiOutlineTeam, AiOutlinePlaySquare } from 'react-icons/ai';

export const UserTabs = () => {
  return (
    <div className="text-lg flex w-full">
      <NavLink
        end
        to="/favorites"
        className="flex justify-center items-center flex-1 py-2 @2xl:py-2.5 px-5 rounded-t-md border-b-2 border-solid border-gray-opacity">
        <div className="hidden @2xl:block">Tracks</div>
        <BsMusicNoteBeamed size={24} className="@2xl:hidden" />
      </NavLink>
      <NavLink
        to="/favorites/artists"
        className="flex justify-center items-center flex-1 py-2 @2xl:py-2.5 px-5 rounded-t-md border-b-2 border-solid border-gray-opacity">
        <div className="hidden @2xl:block">Artists</div>
        <AiOutlineTeam size={24} className="@2xl:hidden" />
      </NavLink>
      <NavLink
        to="/favorites/playlists"
        className="flex justify-center items-center flex-1 py-2 @2xl:py-2.5 px-5 rounded-t-md border-b-2 border-solid border-gray-opacity">
        <div className="hidden @2xl:block">Playlists</div>
        <AiOutlinePlaySquare size={24} className="@2xl:hidden" />
      </NavLink>
    </div>
  );
};
