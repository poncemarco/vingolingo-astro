export const SPINNER = `
    <div class="flex item-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-900 icon icon-tabler icon-tabler-loader-2 dark:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" id="spinner">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
            <style>
                #spinner {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            </style>
        </svg>
        <p class="text-gray-900 dark:text-white icon-tabler-loader-2 ml-2">Buscando...</p>
    </div>
`;