import React, { Component } from 'react';
import dataGame from '../../components/data.json';
class Single extends Component {
    render() {

        console.log(this.props.match.params.id);
        dataGame.map((x, y)=>{
            if(x.id == this.props.match.params.id){
                console.log("Trùng ID");
            }
            else
            {
                console.log(x.title);
            }
            return;
        })
        return (
            <div>
                {/* breadcrumbs */}
                <div className="agileits_breadcrumbs">
                    <div className="container">
                        <div className="agileits_breadcrumbs_left">
                            <ul>
                                <li><a href="/index">Home</a><i>|</i></li>
                                <li>Single</li>
                            </ul>
                        </div>
                        <div className="agileits_breadcrumbs_right">
                            <h3>Single</h3>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/* //breadcrumbs */}
                {/* single */}
                <div className="blog">
                    <div className="container">
                        <div className="col-md-7 wthree_blog_left">
                            <div className="wthree_blog_left_grid">
                                <div className="wthree_blog_left_grid_slider">
                                    <img src="templateHTML/images/s1.jpg" alt=" " className="img-responsive" />
                                </div>
                                <h4>Games Zone</h4>
                                <h3>facilisis velit vitae gravida imperdiet</h3>
                                <ul>
                                    <li><span className="glyphicon glyphicon-user" aria-hidden="true" /><a href="/">Jan Mark</a><i>|</i></li>
                                    <li><span className="glyphicon glyphicon-heart" aria-hidden="true" /><a href="/">20</a><i>|</i></li>
                                    <li><span className="glyphicon glyphicon-tag" aria-hidden="true" /><a href="/">5</a><i>|</i></li>
                                    <li><span className="glyphicon glyphicon-edit" aria-hidden="true" />Voluptatibus</li>
                                </ul>
                                <p>Duis venenatis, mi quis malesuada ultricies, nisi nisl posuere sapien,
                                  id egestas lectus urna et massa. Morbi mauris turpis, posuere auctor auctor
                                  ornare, auctor nec lectus. Class aptent taciti sociosqu ad litora torquent
                                  per conubia nostra, per inceptos himenaeos.
            <i>Nulla faucibus, arcu at consequat vulputate, turpis metus blandit urna,
                                      quis suscipit orci nibh nec est. Phasellus tempus augue turpis. Fusce nec
                                      tellus blandit, ullamcorper sapien vel, placerat erat. Nam non massa elit.
                                      Morbi placerat molestie felis. Integer facilisis velit leo, vitae gravida
              elit fringilla nec.</i>Quisque id nunc nec risus molestie aliquam.
                                  Donec ex eros, lobortis et lorem quis, sagittis malesuada lectus.
                                  Suspendisse ornare sed purus a imperdiet. Integer viverra nisi orci,
            in volutpat leo ornare vitae.</p>
                            </div>
                            <div className="agileits_share">
                                <ul>
                                    <li><a className="linkedin" href="/" /></li>
                                    <li><a className="google" href="/" /></li>
                                    <li><a className="twitter" href="/" /></li>
                                    <li><a className="facebook" href="/" /></li>
                                </ul>
                            </div>
                            <div className="agileits_reply">
                                <h3>Leave a reply</h3>
                                <form action="/" method="post">
                                    <input type="text" name="Name" placeholder="Name" required />
                                    <input type="email" name="Email" placeholder="Email" required />
                                    <input type="text" name="Subject" placeholder="Subject" required />
                                    <textarea name="Message" placeholder="Type your comment..." required defaultValue={""} />
                                    <input type="submit" defaultValue="Submit" />
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 wthree_blog_right">
                            <div className="w3ls_search">
                                <form action="/" method="post">
                                    <input type="text" name="Search" placeholder="Search on our blog" required />
                                    <input type="submit" defaultValue=" " />
                                </form>
                            </div>
                            <div className="w3l_categories">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="/game-detail">Vitae gravida elit fringilla nec sociosqu</a></li>
                                    <li><a href="/game-detail">Morbi mauris turpis, posuere auctor auctor</a></li>
                                    <li><a href="/game-detail">Class aptent taciti sociosqu litora torquent</a></li>
                                    <li><a href="/game-detail">Duis venenatis, mi quis malesuada ultricies</a></li>
                                    <li><a href="/game-detail">Egestas lectus urna et massa morbi mauris</a></li>
                                    <li><a href="/game-detail">Torquent conubia nostra inceptos himenaeos</a></li>
                                    <li><a href="/game-detail">Urna et massa morbi mauris turpis, posuere</a></li>
                                </ul>
                            </div>
                            <div className="w3l_archives">
                                <h3>Archives</h3>
                                <ul>
                                    <li>2 August 2017</li>
                                    <li>14 August 2017</li>
                                    <li>23 August 2017</li>
                                    <li>8 September 2017</li>
                                    <li>18 September 2017</li>
                                </ul>
                            </div>
                            <div className="w3agile_flickr_posts">
                                <h3>Flickr Posts</h3>
                                <div className="w3agile_flickr_post_left">
                                    <a href="/game-detail"><img src="templateHTML/images/ng1.jpg" alt=" " className="img-responsive" /></a>
                                </div>
                                <div className="w3agile_flickr_post_left">
                                    <a href="/game-detail"><img src="templateHTML/images/ng2.jpg" alt=" " className="img-responsive" /></a>
                                </div>
                                <div className="w3agile_flickr_post_left">
                                    <a href="/game-detail"><img src="templateHTML/images/ng3.jpg" alt=" " className="img-responsive" /></a>
                                </div>
                                <div className="w3agile_flickr_post_left">
                                    <a href="/game-detail"><img src="templateHTML/images/ng4.jpg" alt=" " className="img-responsive" /></a>
                                </div>
                                <div className="w3agile_flickr_post_left">
                                    <a href="/game-detail"><img src="templateHTML/images/ng5.jpg" alt=" " className="img-responsive" /></a>
                                </div>
                                <div className="w3agile_flickr_post_left">
                                    <a href="/game-detail"><img src="templateHTML/images/ng6.jpg" alt=" " className="img-responsive" /></a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/* //single */}
            </div>

        );
    }
}

export default Single;