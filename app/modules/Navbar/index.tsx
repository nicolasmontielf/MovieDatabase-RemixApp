import logo from '~/assets/images/logo.svg';
import PlusIcon from '~/modules/Icons/Plus';
import BellIcon from '~/modules/Icons/Bell';
import SearchIcon from '~/modules/Icons/Search';

export default function Navbar() {
    return (
        <div className="flex justify-around mx-auto py-5 px-20">
            <div className="flex">
                <div className='mr-5 content-center'>
                    <img src={logo} className='w-40' alt="" />
                </div>
                <ul className='flex text-white gap-4 font-semibold text-lg items-center'>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>People</li>
                    <li>More</li>
                </ul>
            </div>

            <div className='flex gap-7 text-white items-center'>
                <div>
                    <PlusIcon className='w-6 h-6 text-white' />
                </div>
                <div>
                    <button className='py-0.5 px-1 border rounded-md'>EN</button>
                </div>
                <div>
                    <BellIcon className='w-6 h-6 text-white' />
                </div>
                <div>
                    <button className='bg-pink-700 rounded-full py-1 px-3'>N</button>
                </div>
                <div>
                    <SearchIcon className='w-6 h-6 text-white' />
                </div>
            </div>
        </div>
    )
}