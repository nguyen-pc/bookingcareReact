import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../../utils";
import { FormattedMessage } from "react-intl";
import { Modal } from "reactstrap";
import "./LeftModal.scss";
import facebook from '../../../../assets/images/facebook.svg'
import youtube from '../../../../assets/images/youtube.svg'
import { Scrollbars } from 'react-custom-scrollbars';
import moment from "moment";


class LeftModal extends Component {
  constructor(props) {
    super(props);
   
    };
  

  
  render() {
   
    return (
     <>

      <div className="container-nav">
		<div className="nav-header">
		<Scrollbars style={{ width: 500, height: 600 }}>
			<div className="nav-text"> <FormattedMessage id="homepage.homepage" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.handbook" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.contact-for" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.business" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.recruit" /></div>
			<div className="nav-text"><FormattedMessage id="homepage.patient" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.doctor" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.booing-care" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.contact" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.question" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.terms" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.complaint" /></div>
			<div className="nav-text"> <FormattedMessage id="homepage.regulation" /></div>
			<div className="nav-icon" >
				<div className="nav-img">
				<img className="nut-mxh" width="32" height="32" src={facebook} alt="Facebook"></img>
				</div>
				<div className="nav-img">
				<img className="nut-mxh" width="32" height="32" src={youtube} alt="Facebook"></img>
				</div>
			</div>
			</Scrollbars>
		</div>
	  </div>


{/* 
	<div className="modal left fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div className="modal-dialog" role="document">
			<div className="modal-content">

				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 className="modal-title" id="myModalLabel">Left Sidebar</h4>
				</div>

				<div className="modal-body">
					<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					</p>
				</div>

			</div>
		</div>
	</div>
	 */}

	
			
     </>
    );
  }
}

const mapStateToProps = (state) => {
  
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftModal);
