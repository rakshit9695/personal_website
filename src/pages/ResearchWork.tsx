import { Navigate } from 'react-router-dom';

// Redirect old ResearchWork route to the new Research page
const ResearchWork = () => <Navigate to="/research" replace />;

export default ResearchWork;
