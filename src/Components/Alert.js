import React from 'react'
function Alert(props) {
    return (
        <div style={{height:'10px'}}>
            {props.alert && <div>
                <div className='alert alert-success d-flex align-items-center' role="alert" style={{zIndex: 1 }}>
                    <div>
                        {props.alert.msg}
                    </div>
                </div>

            </div>}
        </div>
    )
}

export default Alert