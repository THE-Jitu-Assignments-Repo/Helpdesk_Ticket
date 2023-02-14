import React from 'react'
import Avvvatars from 'avvvatars-react'
import Tooltip from 'rc-tooltip'
import "rc-tooltip/assets/bootstrap.css";


function Avatar({email, co}) {
    return (
        <div>
            <Tooltip placement="bottom" overlay={email}>
            <span>{' '}<Avvvatars value={email} shadow={true} style="character" borderColor={co} borderSize={2} border={true}/></span>
            </Tooltip>
        </div>
    )
}

export default Avatar
