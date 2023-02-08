import React from 'react'
import Avvvatars from 'avvvatars-react'
import Tooltip from 'rc-tooltip'
import "rc-tooltip/assets/bootstrap.css";


function Avatar({email}) {
    return (
        <div>
            <Tooltip placement="bottom" overlay={email}>
            <span>{' '}<Avvvatars value={email} /></span>
            </Tooltip>
        </div>
    )
}

export default Avatar
