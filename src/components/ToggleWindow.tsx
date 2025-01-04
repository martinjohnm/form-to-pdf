
export const ToggleWindow = ({onclose, onsubmit} : {onclose : any, onsubmit : any}) => {
 
  
    return (
      <div className="flex flex-col items-center mt-20 min-h-screen">
       
  
          <div className="mx-auto container max-w-2xl bg-black p-6 rounded-lg shadow-lg border border-gray-200">
     

            <form className="mx-auto">
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            
            </form>

            <div className="justify-center p-4 gap-3 flex items-center">
                    <button
                    onClick={onclose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                    Cancel
                    </button>
                    <button
                    onClick={onsubmit}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                    Submit
                    </button>
            </div>
           
          </div>
        
      </div>
    );
  };
  
  