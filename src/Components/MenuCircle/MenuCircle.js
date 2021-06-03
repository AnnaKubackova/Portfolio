import './MenuCircle.scss';

function MenuCircle(props) {
    return (        
        <div className="menuitem">
            <div className="menuitem__middle">
                <div className='menuitem__front'>
                    <p>{props.message}</p>
                </div>
                <div className='menuitem__back'>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>              
    );
}

export default MenuCircle;