import { useContext, useState } from "react";
import { ItemContext } from "../../App";

export default function Modal({ show, onClose, categories }) {

    const [name, setName] = useState('');
    const [type, setType] = useState(categories[0] || '');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const ItemsContext = useContext(ItemContext);

    const checkValidation = () => {
        let errors = {};

        if(! name.trim()) errors.name = "Plant name is required";
        if(! type.trim()) errors.type = "Plant type is required";
        if(! price.trim()) errors.price = "Plant price is required";
        if(! image.trim()) errors.image = "Plant image url is required";
        if(! description.trim()) errors.description = "Plant description url is required";

        if (Object.keys(errors).length > 0) {
            alert(Object.values(errors).join("\n")); // simple way to show all errors
            return false;
        }

        return true;
    }

    if (!show) return null; 

    return (
        <div
            onClick={onClose}
            id="authentication-modal"
            tabIndex="-1"
            className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/50"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative p-4 w-full max-w-md mx-auto"
            >
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h3>
                        <button
                            onClick={onClose}
                            type="button"
                            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={(e) => {
                                    e.preventDefault();
                                    if (checkValidation()) {
                                        ItemsContext.itemDispatch({type: 'add', item: {
                                            name: name, type: type, price: price, image: image, description: description
                                        }});
                                        onClose()
                                    }
                                }}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Plant name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="type"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Type
                                </label>
                                <select 
                                    id="type" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="type"
                                    onChange={(e) => setType(e.target.value)}
                                    value={type}
                                >
                                    {
                                        categories.map((category) => (
                                            <option key={category} value={category}>{category}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Price
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="image"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    onChange={(e) => setImage(e.target.value)}
                                    value={image}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required 
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                >
                                </textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
