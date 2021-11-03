/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { IContact, AppContext } from "../context/AppContext";

export const useSearchContact = () => {
  const {
    state: { contacts },
  } = useContext(AppContext);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [contactList, setContactList] = useState<IContact[]>(contacts);

  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setContactList(contacts);
      setIsFetching(false);
    }, 2000);
  }, [contactList, contacts]);

  return {
    isFetching,
    contactList,
  };
};
