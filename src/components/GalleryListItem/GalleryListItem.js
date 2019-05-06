import React from 'react';


class GalleryListItem extends React.Component {
    state = {
      imageClicked: false  
    }
    handleClick = () => {
        this.setState({
            imageClicked: !this.state.imageClicked
        })
    }
    render(){
        console.log(this.state);
        let imageToChange;
        if(this.state.imageClicked){
            imageToChange = 
            <div>
                <p onClick={this.handleClick}>{this.props.image.description}</p>
                <p>{this.props.image.likes}</p>
                <p> <button onClick={() => this.props.likes(this.props.image.id)}> Like </button></p>
            </div>
        }else {
            imageToChange =
            <div>
             <ol><img onClick={this.handleClick} src={this.props.image.path} alt="" /></ol> 
            </div>
        }
        return imageToChange;
    }
}

export default GalleryListItem;