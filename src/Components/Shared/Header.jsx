import '@/../app/globals.css';
import WalletLogo from '@/../public/wallet-logo.svg';
import ExitIcon from '@/../public/Exit-icon.svg';

function Header() {
  return (
    <header className='flex justify-between items-center px-5 py-[15px] w-full max-w-[425px]'>
      <WalletLogo />
      <div className='flex justify-center items-center'>
        <p className='text-gray-4 mr-2.5 text-[18px]'>Your name</p>
        <button type='button'>
          <ExitIcon />
        </button>
      </div>
    </header>
  )
}

export default Header