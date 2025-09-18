import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ItemContext } from '../../App';
import { useContext } from 'react';




export default function Item() {
    const ItemsContext = useContext(ItemContext);

    
    
    
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ItemsContext.items.map((item) => {

                return (
                    <div
                        key={item.id}
                        className={`relative overflow-hidden rounded-lg max-w-xs shadow-lg ${
                            item.id % 2 == 0 ? "bg-orange-500" : "bg-purple-500"
                        }`}
                    >
                        {/* Background SVG */}
                        <svg
                            className="absolute bottom-0 left-0 mb-8"
                            viewBox="0 0 375 283"
                            fill="none"
                            style={{ transform: "scale(1.5)", opacity: 0.1 }}
                        >
                            <rect
                                x="159.52"
                                y="175"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 159.52 175)"
                                fill="white"
                            />
                            <rect
                                y="107.48"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 0 107.48)"
                                fill="white"
                            />
                        </svg>

                        {/* Image Section */}
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div
                                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{
                                    background: "radial-gradient(black, transparent 60%)",
                                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                    opacity: 0.2,
                                }}
                            />
                            
                            <img
                                className="relative w-40"
                                src={`/images/${item.image}`}
                                alt="" style={{ height: '250px' }}
                            />
                        </div>

                        {/* Product Info */}
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <span className="block opacity-75 -mb-1">{ item.type }</span>
                            <div className="flex justify-between">
                                <span className="block font-semibold text-xl">
                                    { item.name }
                                </span>
                                <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                    ${ item.price }
                                </span>
                            </div>
                        </div>

                        {/* Icon Buttons */}
                        <div className="flex justify-center gap-4 pb-4 relative z-10">
                            <a
                                href="#"
                                className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
                            >
                                <FontAwesomeIcon icon={faEye} className="text-xl text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
                            >
                                <FontAwesomeIcon icon={faEdit} className="text-xl text-white" />
                            </a>
                            <a
                                href="#"
                                className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
                            >
                                <FontAwesomeIcon icon={faTrash} className="text-xl text-white" />
                            </a>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}
