// Import needed packages
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../style/components/BottomNav.scss'

/**
 * Bottom navigation
 */
// Function that returns the HTML of the component
const BottomNav = () => {
    const currentPage = window.location.pathname
    useEffect(() => {
        const handleOnRouteUpdate = () => {
          // do something on route change
        }
        document.addEventListener('onRouteUpdated', handleOnRouteUpdate);
        return () => {
            document.removeEventListener('onRouteUpdated',handleOnRouteUpdate);
       }
    })
    
    return (
        <div className="BottomNav">
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} className={`${currentPage == '/' ? 'active' : ''}`}>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.821" height="15.046" viewBox="0 0 16.821 15.046">
                                    <path id="Vector" d="M16.473,7.4a1.085,1.085,0,0,1,0,1.591,1.216,1.216,0,0,1-.841.33h-.805v5.163a.578.578,0,0,1-.594.563H9.3V11.109H7.223v3.938H2.587a.578.578,0,0,1-.594-.562V9.321H1.188A1.159,1.159,0,0,1,0,8.2a1.1,1.1,0,0,1,.349-.8L7.992.165A.6.6,0,0,1,8.184.043a.623.623,0,0,1,.454,0A.6.6,0,0,1,8.83.165L16.473,7.4Z"/>
                                </svg>
                            </span>Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/trainen'} className={`${currentPage == '/trainen' ? 'active' : ''}`}>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.667" height="9.333" viewBox="0 0 18.667 9.333">
                                    <path id="Vector" d="M18.667,4V5.333H17.333V8H16V9.333H14v-4H4.667v4h-2V8H1.333V5.333H0V4H1.333V1.333H2.667V0h2V4H14V0h2V1.333h1.333V4Z" transform="translate(0)"/>
                                </svg>    
                            </span>Trainen
                        </Link>
                    </li>
                    <li>
                        <Link to={'/voortgang'} className={`${currentPage == '/voortgang' ? 'active' : ''}`}>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <path id="Vector" d="M15.666,5.118l-1.473-.925c-3.234,4.91-8.255,7.69-13,9.23L0,11.252A23.851,23.851,0,0,0,12.67,3.231L10.736,2.016,16.123,0Zm.738-.867H17V17H14.15V5.358c.069-.1.139-.193.2-.291l1.875,1.18.175-2ZM12.322,8.913V17H9.472V10.05c.486-.357.965-.736,1.429-1.136Zm-4.678,3.06V17H4.794V12.745c.534-.24,1.06-.5,1.586-.772ZM.53,13.576l.351.637.258-.08q.807-.257,1.621-.557h.208V17H.117V13.576Z"/>
                                </svg>
                            </span>Voortgang
                        </Link>
                    </li>
                    <li>
                        <Link to={'/challenges'} className={`${currentPage == '/challenges' ? 'active' : ''}`}>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22.06" height="18.77" viewBox="0 0 22.06 18.77">
                                    <g id="Group_4" data-name="Group 4" transform="translate(-330.51 -381.29)">
                                        <path id="Path_1" data-name="Path 1" d="M352.57,400.06H338.52a9.7,9.7,0,0,0,2.59-1.57,3.185,3.185,0,0,0,1.29-2.52,3.438,3.438,0,0,0-1.49-2.39l-.33-.3a1.048,1.048,0,0,1-.37-.52.833.833,0,0,1,.46-.71,5.6,5.6,0,0,1,1.14-.49,8.882,8.882,0,0,0,.9-.36,4.935,4.935,0,0,0,1.54-1.14l3.35,5.58,1.8-3.07Z"/>
                                        <path id="Path_2" data-name="Path 2" d="M341.41,396.02c-.04-.7-.56-1.16-1.16-1.69-.12-.1-.24-.21-.35-.31a1.965,1.965,0,0,1-.68-1.1,1.776,1.776,0,0,1,.93-1.73,7.059,7.059,0,0,1,1.33-.58,6.193,6.193,0,0,0,.81-.32,4.143,4.143,0,0,0,1.42-1.12l-1.68-2.8v-1.38l2.65-1.71-3.4-1.99v5.19l-4.38,7.9-2.23-2.51-4.16,8.19h4.91a12.772,12.772,0,0,0,5.03-2.32A2.36,2.36,0,0,0,341.41,396.02Zm.62-13.42,1.22.71-1.22.79Z"/>
                                    </g>
                                </svg>
                            </span>Challenges
                        </Link>
                    </li>
                    <li>
                        <Link to={'/sociaal'} className={`${currentPage == '/sociaal' ? 'active' : ''}`}>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15">
                                    <path id="Vector" d="M9,6a3,3,0,1,1,2.121-.879A3,3,0,0,1,9,6ZM5,5a2,2,0,1,1-.586-1.414A2,2,0,0,1,5,5ZM.491,12.326a.78.78,0,0,1-.358-.442A3,3,0,0,1,4.441,8.368a6.484,6.484,0,0,0-1.9,3.959,2.3,2.3,0,0,0,.025.654,4.969,4.969,0,0,1-2.07-.655Zm14.948.655a2.32,2.32,0,0,0,.026-.654,6.484,6.484,0,0,0-1.907-3.96,3,3,0,0,1,4.307,3.517.78.78,0,0,1-.357.442,4.969,4.969,0,0,1-2.07.654ZM17,5a2,2,0,1,1-.586-1.414A2,2,0,0,1,17,5ZM4.3,13.19a.844.844,0,0,1-.277-.71,5,5,0,0,1,9.946,0,.843.843,0,0,1-.277.71,7,7,0,0,1-9.392,0Z"/>
                                </svg>
                            </span>Sociaal
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

// Exporting the function to make it accesible from other files
export default BottomNav