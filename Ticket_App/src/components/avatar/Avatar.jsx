import React from 'react'
import Avvvatars from 'avvvatars-react'


function Avatar({email}) {
    return (
        <div>
            <Avvvatars value={email} />
        </div>
    )
}

export default Avatar
