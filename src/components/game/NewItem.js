import React, { Component } from 'react';
import {Link } from "react-router-dom";

class NewItem extends Component {
    constructor(props){
        super(props);
    }
    to_slug=(str)=>
    {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {
        const {title, gameId,photo} = this.props;
        // let x = "mystr" + title + gameId;
        // let x = `mystr${title}-${gameId}.html`;
        
        return (
            <div className="gallery-grid">
                <Link to={"/game-detail/"+this.to_slug(title)+"."+gameId+".html"}
                    // href={`/game-detail/${title}-${gameId}.html`} >
                    className="book popup-with-zoom-anim button-isi zoomIn animated" data-wow-delay=".5s">
                    <img src={photo} alt="Game" className="img-responsive zoom-img"/>
                    <p>{title}</p>
                </Link>
            </div>
        );
    }
}

export default NewItem;