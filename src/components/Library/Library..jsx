import Dashboard from "components/Dashboard/Dashboard";
import {LibraryBlock } from "./Library.styled";
import MyLibraryBooks from 'components/MyLibraryBooks/MyLibraryBooks';
import LibraryDashboard from "components/LibraryDashoard/LibraryDashoard";

export default function Library() {
  return (
    <LibraryBlock>
      <Dashboard>
        <LibraryDashboard />
      </Dashboard>
      <MyLibraryBooks />
    </LibraryBlock>
  );
}
  