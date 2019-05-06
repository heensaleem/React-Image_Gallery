import React from 'react';
import './GalleryListItem.css';


class GalleryListItem extends React.Component {
    state = {
      isClicked: false  
    }
    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    clickLike = (likeId) => {
        this.props.clickLike(likeId)
    }
    render(){
        console.log(this.state);
        let imageSwitch;

        if(this.state.isClicked) {
            imageSwitch = (
                <p onClick={this.handleClick} className="textLayout">{this.props.image.description}</p>
            )
        }else {
            imageSwitch = 
            <img onClick={this.handleClick} src={this.props.image.path} alt='' />
            
        }


        return(
            
            <div className="imageDisplay">
            {imageSwitch}
            <br />
            <button  className="likeButton" onClick={() => this.clickLike(this.props.image.id)}>Like</button> 
            <p>Likes: {this.props.image.likes}</p>
            
            </div>
        )
    }
}

export default GalleryListItem;