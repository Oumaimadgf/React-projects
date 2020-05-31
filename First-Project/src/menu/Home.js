import React, {Component} from 'react';
import Menu from "./menu";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
          <div className=" content">
              <section className="content-header">
                  <div className="container-fluid">
                      <div className="row " style={{marginLeft: "19%"}}>
                          <div className="col-sm-6">
                        <h2>home</h2>
                          </div>
                          <div className="col-sm-6">
                              <ol className="breadcrumb float-sm-right">
                                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                              </ol>
                          </div>
                      </div>
                  </div>
              </section>
              <h5 class="mb-2 mt-4">Home</h5>
              <div className="row " style={{marginLeft: "35%"}}>
                  <div class="col-sm-6  col-lg-4">
                      <div class="small-box bg-success">
                             <h2>Users</h2>
                              <div className="inner">

                              <p>List Of Users</p>
                          </div>
                          <div class="icon">
                              <i class="fas fa-user-plus"></i>
                          </div>
                          <Link to="/users" class="small-box-footer">
                              More info <i class="fas fa-arrow-circle-right"></i>
                          </Link>
                      </div>
                  </div>
                  <div className="col col-lg-4">
                      <div className="small-box bg-info">
                          <div className="inner">
                              <h2>Goals</h2>

                              <p>List Of Goals</p>
                          </div>
                          <div className="icon">
                              <i className="ion ion-stats-bars"></i>
                          </div>
                          <Link to="/list" className="small-box-footer">
                              More info <i className="fas fa-arrow-circle-right"></i>
                          </Link>
                      </div>
                  </div>
              </div>

              {/*    <div class="col-lg-3 col-6">*/}
              {/*        <div class="small-box bg-warning">*/}
              {/*            <div class="inner">*/}
              {/*                <h3>44</h3>*/}

              {/*                <p>User Registrations</p>*/}
              {/*            </div>*/}
              {/*            <div class="icon">*/}
              {/*                <i class="fas fa-user-plus"></i>*/}
              {/*            </div>*/}
              {/*            <a href="#" class="small-box-footer">*/}
              {/*                More info <i class="fas fa-arrow-circle-right"></i>*/}
              {/*            </a>*/}
              {/*        </div>*/}
              {/*    </div>*/}


              </div>








        );
    }
}

export default Home;