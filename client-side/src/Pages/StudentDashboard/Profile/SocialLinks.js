import EditIcon from '@mui/icons-material/Edit';
import { Save } from '@mui/icons-material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useState } from 'react';
const SocialLinks = () => {
    const [socialLinks, setSocialLinks] = useState([]);

    const handleAddSocialLink = () => {
        setSocialLinks([...socialLinks, {}]);
    };
    return ( <div>
        <form action="">
            <div className="left flex flex-col">
                <div className="left flex flex-col md:flex-row">
                    <div class="mb-6 sm:w-full md:w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">GitHub</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class=" md:ml-20 mb-6 w-full md:w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Linkdin</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                </div>
                <div className="left flex flex-row">
                    <div class="mb-6 w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Twitter(X)</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class=" ml-20 mb-6 w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Instagram</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                </div>
                    {socialLinks.map((link, index) => (
                        <div className="left flex flex-row" key={index}>
                            <div class="mb-6 w-1/2">
                                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                    Social Site Name 
                                </label>
                                <input
                                    type="text"
                                    id="base-input"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div class=" ml-20 mb-6 w-1/2">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Link</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                        </div>
                    ))}
                <div className='flex flex-row mb-3'>

                    <button type="button" class="text-white bg-[#2EB8CB] hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red dark:focus:ring-red" onClick={handleAddSocialLink}> <AddCircleOutlinedIcon className="mr-2" style={{ color: "white"}}/>Add Links
                    </button>
                </div>
                <div className='flex flex-col-reverse md:flex-row-reverse'>

                    <button type="button" class="text-white bg-[#2EB8CB] hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red dark:focus:ring-red md:ml-10"> <Save text-white ml="3px" color='#fff'/>Save Changes
                    </button>
                    <button type="submit" class="text-black bg-yellow hover:bg-red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red dark:focus:ring-red mb-3 md:mb-0">
                    Edit <EditIcon ml="3px"  /></button>
                </div>
            </div>
        </form>

    </div> );
}
 
export default SocialLinks;