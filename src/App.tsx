// Main App component - Sets up routing for the entire application
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ProjectDetail from './pages/ProjectDetail';

function App() {
	return (
		// BrowserRouter enables client-side routing
		<BrowserRouter>
			{/* Layout wraps all pages with Header and Footer */}
			<Layout>
				{/* Routes defines all the page routes in the app */}
				<Routes>
					{/* Homepage - displays project grid */}
					<Route path='/' element={<Home />} />

					{/* About page */}
					<Route path='/about' element={<About />} />

					{/* Contact page */}
					<Route path='/contact' element={<Contact />} />

					{/* Blog page */}
					<Route path='/blog' element={<Blog />} />

					{/* Dynamic project detail page */}
					{/* The :id parameter matches any URL like /project/ryder-cup */}
					<Route path='/project/:id' element={<ProjectDetail />} />

					{/* 404 - Could add a NotFound page here later */}
					{/* For now, any unmatched route will show a blank page */}
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
