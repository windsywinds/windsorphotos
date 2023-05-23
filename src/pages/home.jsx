import { NavLink } from 'react-router-dom';

const Home = () => {


    return (
      <div className="flex items-center justify-center flex-col text-center pt-9">
          
          <p>Welcome, thanks for checking out my site, it's still under construction, so please check back later.</p>
          <p>In the meantime, please feel free to check out my images on instagram, <a className="underline" href="https://instagram.com/windsywinds/">@windsywinds</a></p>
          <p className="pt-5">If there are any prints you'd like, you can check out <a className="underline" href="https://windsywinds.picfair.com/">my current shop</a>, or <NavLink to='/contact' className="underline">send me a message</NavLink> and I'll get back to you with some options!</p>
          
      </div>
      );
}

export default Home;