import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Wizard from './Wizard/Wizard';
import './App.scss';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="root">
        <Wizard />
      </div>
    </QueryClientProvider>
  );
}

export default App;
