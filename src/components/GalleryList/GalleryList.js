import React, {Component} from 'react';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryList extends Component {
    render() {
        return(
            <div>
                {this.props.images.map(picture => {
                    return(
                        <GalleryListItem key={picture.id} clickLike={this.props.clickLike} image = {picture} />
                    )
                })}
                
            </div>
        )   
    }
}


export default GalleryList;