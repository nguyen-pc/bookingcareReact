import React, { Component } from "react";
import { connect } from "react-redux";
import logo from '../../assets/logo.svg'
import './HomeFooter.scss'
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div class="container ">
          <div class="row">
            <div class="col footer-padding">
              <div className="footer-logo"><img className="logo-footer-min" src={logo} /></div>
              <div className="footer-text">
                <div className="footer-name">Công ty trách nhiệm một thành viên Nguyên Channel</div>
                <div className="footer-t"><i className="fa-solid fa-location-dot footer-icon"></i> Xã Thủy Liễu, huyện Gò Quao, tỉnh Kiên Giang</div>
                <div className="footer-t">ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</div>

              </div>
            </div>
            <div class="col footer-padding">
              <div className="footer-t-m">Liên hệ hợp tác</div>
              <div className="footer-t-m">Gói chuyển đổi số doanh nghiệp</div>
              <div className="footer-t-m">Tuyển dụng</div>
              <div className="footer-t-m">Câu hỏi thường gặp</div>
              <div className="footer-t-m">Điều khoản sử dụng</div>
              <div className="footer-t-m">Chính sách Bảo mật</div>
              <div className="footer-t-m">Quy trình hỗ trợ giải quyết khiếu nại</div>
              <div className="footer-t-m">Quy chế hoạt động</div>
              
            </div>
            <div class="col">
              <div className=" text-container">
                <div className="text-l-g" >Trụ sở tại Hà Nội</div>
                <div className=" text-s-m">28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</div>
              </div>
              <div className=" text-container">
                <div className="text-l-g" >Văn phòng tại TP Hồ Chí Minh</div>
                <div className=" text-s-m">Số 01, Hồ Bá Kiện, Phường 15, Quận 10</div>
              </div>
              <div className=" text-container">
                <div className="text-l-g" >Hỗ trợ khách hàng</div>
                <div className=" text-s-m">support@bookingcare.vn (7h - 18h)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="information">
          <div>
          <p>
            &copy;2023 Thanh Nguyen. More information, please{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=mM8f2Vp4U70"
            >
              {" "}
              click here
            </a>{" "}
          </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
