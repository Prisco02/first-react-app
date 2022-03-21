export default function Header(props){
    function handleClick(){
        return(
            <div className="account-dropdown">
                        <ul>
                            <li><a href="pages/signin.php">Log-In</a></li>
                            <li><a>Log-Out</a></li>
                            <li><a href="pages/signup.php">Register</a></li>
                            <li><a href="pages/addProduct.php">Sell</a></li>
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Orders</a></li>
                        </ul>
                    </div>
        )
    }

    return (
            <div className="navbar">
                <div className="account" onClick={handleClick} style={{backgroundImage:`url(${require(`../img/${props.img}`)})`}}>
                </div>
                <div className="sections">
                    <a href="index.php">DefaultCube</a>
                    <input id="burgermenu" type="checkbox" />
                    <div className="burger">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <ul className="dropdown">
                        <li><a href="">Shop</a></li>
                        <li><a href="">Commission</a></li>
                        <li><a href="">News</a></li>
                    </ul>
                </div>
                <div className="cart">
                    <a className="cart-img" href="pages/scart.php"></a>
                </div>
            </div>
    )
}