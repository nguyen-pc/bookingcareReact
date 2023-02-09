import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import './HandBook.scss'


class HandBook extends Component {
  render() {
    
    return (
      <div className="section-share section-handBook">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section"><FormattedMessage id="homepage.handbook" /></span>
            <button className="btn-section"><FormattedMessage id="homepage.more-info" /></button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize ">
                <div className="bg-image section-handBook" />
                <div className="bg-text section-handBook">Review 7 địa chỉ khám Tiêu hóa tốt Hà Nội và hướng dẫn đi khám</div>
              </div>
              <div className="section-customize ">
                <div className="bg-image section-handBook" />
                <div className="bg-text section-handBook">Top 7 Bác sĩ Thần kinh giỏi, uy tín ở Hà Nội (phần 2)</div>
              </div>
              <div className="section-customize ">
                <div className="bg-image section-handBook" />
                <div className="bg-text section-handBook">Review 7 Bệnh viện, Phòng khám Thần kinh uy tín Hà Nội (phần 2)</div>
              </div>
              <div className="section-customize ">
                <div className="bg-image section-handBook" />
                <div className="bg-text section-handBook">Top 7 Bác sĩ Tim mạch giỏi ở Hà Nội (Phần 2)</div>
              </div>
              <div className="section-customize ">
                <div className="bg-image section-handBook" />
                <div className="bg-text section-handBook">Cẩm nang 6</div>
              </div>
              <div className="section-customize ">
                <div className="bg-image section-handBook" />
                <div className="bg-text section-handBook">Cẩm nang 7</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
