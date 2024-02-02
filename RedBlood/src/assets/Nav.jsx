import '../assets/Nav.css'

function Nav(){
    return (
        <>
        <div className="navbar flex m-0">
            <div className="left-nav">
                <h1>RedBlood</h1>
            </div>

            <div className="right-nav">

            <ul className="flex">
                <li className="ml-2 hover:text-gray-400">Home</li>
                <li className="ml-2 hover:text-gray-400">Services</li>
                <li className="ml-2 hover:text-gray-400">Pricing</li>
                <li className="ml-2 hover:text-gray-400">About Us</li>
                <li className="ml-2 hover:text-gray-400">Contact Us</li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default Nav