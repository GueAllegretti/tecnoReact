import About from "../components/about";
import Dashboard from "../components/dashboard";
import Incentives from "../components/incentives";
import Services from "../components/services";

const Home = () =>{
    <>
    <Dashboard />
        <Incentives />
    <div className="m-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Services />
      </div>
    </div>
     <About />
    </>
}

export default Home;