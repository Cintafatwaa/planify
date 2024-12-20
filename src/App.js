import IconPlanify from './assets/logo.png';
import Ilustrasi1 from './assets/beranda.png'
function App() {
  const menus =['Beranda', 'Tentang Kami', 'Layanan'];
  return (
    <div className="bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36 ">
        <img alt="icon-planify" src={IconPlanify} className='w-36'/>
        <div className='flex-1'>
          <ul className='flex flex-row space-x-6'>
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div>
          <button className='border border-x-blue-500 rounded-full py-2 px-6'>
            Login
          </button>
        </div>
      </header>
      <main className='container max-w-5xl mx-auto grid grid-cols-2 pt-16 pb-18'>
        <div className=''>
          <h1 className='font-bold text-4xl pb-5'>
            Want anything to be easy
            <br/>
            with Planify
          </h1>
          <div className='font-normal text-xs pb-12'>
          Planify membantu mengelola acara dengan mudah dan cepat, menghadirkan kenyamanan dalam setiap perencanaan.
          </div>
          <button className='py-4 px-16 bg-blue-500 rounded-md text-white drop-shadow-3xl'>Get Started</button>
        </div>
          <div>
            <img alt='Beranda' src={Ilustrasi1}></img>
          </div>
      </main>
    </div>
  );
}

export default App;
