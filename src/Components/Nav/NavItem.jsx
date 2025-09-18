import { ItemContext } from '../../App';
import { useContext } from 'react';

export default function NavItem({navText, isActive}) {

    const itemsContext = useContext(ItemContext);

    return (
        
        <li>
            <a
                href=""
                className={`${isActive 
                ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500" 
                : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} 
                block py-2 px-3 md:p-0 rounded-sm`}
                onClick={ (e) =>{
                    e.preventDefault()
                    itemsContext.itemDispatch({type:navText})
                }}
            >
                {navText}
            </a>
        </li>
    );
}