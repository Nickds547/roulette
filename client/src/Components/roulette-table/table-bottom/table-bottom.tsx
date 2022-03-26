import './table-bottom.css'

const TableBottom = () => {
    return (
        <>
        <div className='table-bottom-container table-bottom-image'>
            <div className='row-one-container'>
                <span className='row-one-item'>First 12</span>
                <span className='row-one-item'>Second 12</span>
                <span className='row-one-item'>Third 12</span>
            </div>
            <div className="row-two-container">
                <span className='row-two-item'> 1 to 18</span>
                <span className='row-two-item'>EVEN</span>
                <span className='row-two-item'></span>
                <span className='row-two-item'></span>
                <span className='row-two-item'>ODD</span>
                <span className='row-two-item'>19 to 36</span>
            </div>
        </div>
        </>
    )
}

export default TableBottom;