import { DashboardBlock} from './Dashboard.styled';

export default function Dashboard({ children }) {
  return (
    <DashboardBlock>
      {children}
    </DashboardBlock>
  );
}