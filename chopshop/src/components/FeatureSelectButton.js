import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import ToggleButton from '@material-ui/lab/ToggleButton';

let FeatureSelectButton = ({featureTitle,featureTag,image,currentFocus,size,...other}) =>{
    return (
        <Tooltip title={featureTitle} placement="top">
            <ToggleButton
                {...other}
                style={{ 
                        "min-height": size, 
                        "max-height": size,
                        "min-width": size,
                        "max-width": size
                    }}
                variant='contained'
                value={featureTag}
                selected={featureTag === currentFocus}
            >
    
                <img src={image} height={size} width={size} alt='Feature Select Button'/>
    
            </ToggleButton>
        </Tooltip>
    )
}

export default FeatureSelectButton;