import { createContext, useState } from 'react';

type AppContextType = {
  menuVisibility: boolean;
  searchVisibility: boolean;
  logOutVisibility: boolean;
  deleteUserVisibility: boolean;
  shareVisibility: boolean;
  shareLink: string;
  handleShare: (a: string) => void;
  handleMenuVisibility: () => void;
  handleSearchVisibility: () => void;
  handleLogOutVisibility: () => void;
  handleDeleteUserVisibility: () => void;
};

const defaultContext: AppContextType = {
  menuVisibility: false,
  searchVisibility: false,
  logOutVisibility: false,
  deleteUserVisibility: false,
  shareVisibility: false,
  shareLink: '',
  handleShare: () => {},
  handleMenuVisibility: () => {},
  handleSearchVisibility: () => {},
  handleLogOutVisibility: () => {},
  handleDeleteUserVisibility: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContext);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [shareLink, setShareLink] = useState('');
  const [menuVisibility, setMenuVisibility] = useState(true);
  const [shareVisibility, setShareVisibility] = useState(false);
  const [logOutVisibility, setLogOutVisibility] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [deleteUserVisibility, setDeleteUserVisibility] = useState(false);

  const handleMenuVisibility = () => setMenuVisibility(!menuVisibility);
  const handleSearchVisibility = () => setSearchVisibility(!searchVisibility);
  const handleLogOutVisibility = () => setLogOutVisibility(!logOutVisibility);
  const handleDeleteUserVisibility = () => setDeleteUserVisibility(!deleteUserVisibility);
  const handleShare = (link: string) => {
    setShareVisibility(!shareVisibility);
    setShareLink(link);
  };

  return (
    <AppContext.Provider
      value={{
        menuVisibility,
        searchVisibility,
        logOutVisibility,
        deleteUserVisibility,
        shareVisibility,
        shareLink,
        handleShare,
        handleMenuVisibility,
        handleSearchVisibility,
        handleLogOutVisibility,
        handleDeleteUserVisibility,
      }}>
      {children}
    </AppContext.Provider>
  );
};
