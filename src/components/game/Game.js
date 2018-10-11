import React, { Component } from 'react';
import NewItem from './NewItem';
import dataGame from '../../components/data.json'; 
class Game extends Component {

    render() {
        var so = [1, 3, 5, 7, 9];
        var so2 = so.map((value, key)=> value*3 + " và " + key);//Hàm map(value, key) có 2 parameter value là từng phần tử trong mảng, key là số thứ tự của từng phần tử tính từ 0
        console.log(so2);

        return (
            <div>
                {/* gallery */}
                <div className="gallery-w3layouts" id="gallery">
                    <div className="container">
                        <h2>Exclusive Games</h2>
                        <div className="gallery-grids">
                            
                                {
                                    dataGame.map((x, y)=>{
                                        return (
                                            <NewItem key={y} 
                                            content={x.content} 
                                            gameId={x.id} 
                                            photo={x.photo} 
                                            title={x.title}></NewItem>
                                        );
                                    })
                                }
                            
                           
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
                {/*//gallery */}


                <div className="pop-up">
                    <div id="small-dialog" className="mfp-hide book-form">
                        <div className="pop-up-content-agileits-w3layouts">
                            <div className="col-md-6 w3ls-left">
                                <img src="templateHTML/images/g1.jpg" alt=" " className="img-responsive zoom-img" />
                            </div>
                            <div className="col-md-6 w3ls-right">
                                <h4>Game-1</h4>
                                <p>Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa. </p>
                                <p className="agileits">Etiam porttitor neque enim, sit amet mollis est sollicitudin sed.</p>
                                <div className="span span1">
                                    <p className="left">NAME</p>
                                    <p className="right">: Sed Perst</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span2">
                                    <p className="left">DEVELOPER</p>
                                    <p className="right">: Martina</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span3">
                                    <p className="left">REQUIRES</p>
                                    <p className="right">: 2GB Hard Disk Space</p>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="pop-up">
                    <div id="small-dialog2" className="mfp-hide book-form">
                        <div className="pop-up-content-agileits-w3layouts">
                            <div className="col-md-6 w3ls-left">
                                <img src="templateHTML/images/g2big.jpg" alt=" " className="img-responsive zoom-img" />
                            </div>
                            <div className="col-md-6 w3ls-right">
                                <h4>Game-2</h4>
                                <p>Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa. </p>
                                <p className="agileits">Etiam porttitor neque enim, sit amet mollis est sollicitudin sed.</p>
                                <div className="span span1">
                                    <p className="left">NAME</p>
                                    <p className="right">: Vivamus</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span2">
                                    <p className="left">DEVELOPER</p>
                                    <p className="right">: Quentin</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span3">
                                    <p className="left">REQUIRES</p>
                                    <p className="right">: 3GB Hard Disk Space</p>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="pop-up">
                    <div id="small-dialog3" className="mfp-hide book-form">
                        <div className="pop-up-content-agileits-w3layouts">
                            <div className="col-md-6 w3ls-left">
                                <img src="templateHTML/images/g3big.jpg" alt=" " className="img-responsive zoom-img" />
                            </div>
                            <div className="col-md-6 w3ls-right">
                                <h4>Game-3</h4>
                                <p>Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa. </p>
                                <p className="agileits">Etiam porttitor neque enim, sit amet mollis est sollicitudin sed.</p>
                                <div className="span span1">
                                    <p className="left">NAME</p>
                                    <p className="right">: Venenatis</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span2">
                                    <p className="left">DEVELOPER</p>
                                    <p className="right">: Stanley</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span3">
                                    <p className="left">REQUIRES</p>
                                    <p className="right">: 1GB Hard Disk Space</p>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="pop-up">
                    <div id="small-dialog4" className="mfp-hide book-form">
                        <div className="pop-up-content-agileits-w3layouts">
                            <div className="col-md-6 w3ls-left">
                                <img src="templateHTML/images/g5.jpg" alt=" " className="img-responsive zoom-img" />
                            </div>
                            <div className="col-md-6 w3ls-right">
                                <h4>Game-4</h4>
                                <p>Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa. </p>
                                <p className="agileits">Etiam porttitor neque enim, sit amet mollis est sollicitudin sed.</p>
                                <div className="span span1">
                                    <p className="left">NAME</p>
                                    <p className="right">: Interdum</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span2">
                                    <p className="left">DEVELOPER</p>
                                    <p className="right">: Spielberg</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span3">
                                    <p className="left">REQUIRES</p>
                                    <p className="right">: 3GB Hard Disk Space</p>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="pop-up">
                    <div id="small-dialog5" className="mfp-hide book-form">
                        <div className="pop-up-content-agileits-w3layouts">
                            <div className="col-md-6 w3ls-left">
                                <img src="templateHTML/images/g6.jpg" alt=" " className="img-responsive zoom-img" />
                            </div>
                            <div className="col-md-6 w3ls-right">
                                <h4>Game-5</h4>
                                <p>Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa. </p>
                                <p className="agileits">Etiam porttitor neque enim, sit amet mollis est sollicitudin sed.</p>
                                <div className="span span1">
                                    <p className="left">NAME</p>
                                    <p className="right">: Faucibus</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span2">
                                    <p className="left">DEVELOPER</p>
                                    <p className="right">: Cameron</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span3">
                                    <p className="left">REQUIRES</p>
                                    <p className="right">: 2GB Hard Disk Space</p>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="pop-up">
                    <div id="small-dialog6" className="mfp-hide book-form">
                        <div className="pop-up-content-agileits-w3layouts">
                            <div className="col-md-6 w3ls-left">
                                <img src="templateHTML/images/g7big.jpg" alt=" " className="img-responsive zoom-img" />
                            </div>
                            <div className="col-md-6 w3ls-right">
                                <h4>Game-6</h4>
                                <p>Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa. </p>
                                <p className="agileits">Etiam porttitor neque enim, sit amet mollis est sollicitudin sed.</p>
                                <div className="span span1">
                                    <p className="left">NAME</p>
                                    <p className="right">: Tincidunt</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span2">
                                    <p className="left">DEVELOPER</p>
                                    <p className="right">: Jackson</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span3">
                                    <p className="left">REQUIRES</p>
                                    <p className="right">: 4GB Hard Disk Space</p>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="pop-up">
                    <div id="small-dialog7" className="mfp-hide book-form">
                        <div className="pop-up-content-agileits-w3layouts">
                            <div className="col-md-6 w3ls-left">
                                <img src="templateHTML/images/g4big.jpg" alt=" " className="img-responsive zoom-img" />
                            </div>
                            <div className="col-md-6 w3ls-right">
                                <h4>Game-7</h4>
                                <p>Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa. </p>
                                <p className="agileits">Etiam porttitor neque enim, sit amet mollis est sollicitudin sed.</p>
                                <div className="span span1">
                                    <p className="left">NAME</p>
                                    <p className="right">: Vestibulum</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span2">
                                    <p className="left">DEVELOPER</p>
                                    <p className="right">: Daniel</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span3">
                                    <p className="left">REQUIRES</p>
                                    <p className="right">: 2GB Hard Disk Space</p>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="pop-up">
                    <div id="small-dialog8" className="mfp-hide book-form">
                        <div className="pop-up-content-agileits-w3layouts">
                            <div className="col-md-6 w3ls-left">
                                <img src="templateHTML/images/g8.jpg" alt=" " className="img-responsive zoom-img" />
                            </div>
                            <div className="col-md-6 w3ls-right">
                                <h4>Game-8</h4>
                                <p>Duis sodales nibh vitae augue feugiat efficitur. Sed vel urna sollicitudin, interdum massa nec, sagittis massa. </p>
                                <p className="agileits">Etiam porttitor neque enim, sit amet mollis est sollicitudin sed.</p>
                                <div className="span span1">
                                    <p className="left">NAME</p>
                                    <p className="right">: Vehicula ligula</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span2">
                                    <p className="left">DEVELOPER</p>
                                    <p className="right">: Cyrill</p>
                                    <div className="clearfix" />
                                </div>
                                <div className="span span3">
                                    <p className="left">REQUIRES</p>
                                    <p className="right">: 3GB Hard Disk Space</p>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Game;