import './Header.css'

function Header(props){
    return(
        <header className="header">
            <div className='row'>
                <div className='name_current'>
                    <div className='flag'></div>
                    <p>USA $:</p>
                </div>
                <div className='name_current'>{props.usd}</div>
            </div>
            <div className='row'>
                <div className='name_current'>
                    <div className='flag flag--eur'></div>
                    <p>EUR €:</p>
                </div>
                <div className='name_current'>{props.eur}</div>
            </div>
        </header>
    );
}

export default Header;