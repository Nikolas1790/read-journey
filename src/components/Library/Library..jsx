import MyLibraryBooks from 'components/MyLibraryBooks/MyLibraryBooks';
import LibraryDashboard from "components/LibraryDashoard/LibraryDashoard";
import UnivesalGeneralBlock from "components/UniversalGeneralBlock/UniversalGeneralBlock";

export default function Library() {
  return (
    <UnivesalGeneralBlock >
      
      <LibraryDashboard />
   
      <MyLibraryBooks />
    </UnivesalGeneralBlock>
  );
}
  