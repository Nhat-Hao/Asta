import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Avatar, DatePicker, Space } from "antd";

import { DownOutlined, UserOutlined, AlertOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;
function onChange(date, dateString) {
  console.log(date, dateString);
}

function App() {
  return (
    <Layout className="container">
      <Sider className="sider__menu" theme="light">note
        <div className="logo" />
        <Menu
          className="site__menu-nav"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
        >
          <div className="site__menu-title">
            <p>Tổng quan</p>
          </div>
          <Menu.Item className="bg">
            <p className="site__menu-text click">Dashboard</p>
          </Menu.Item>
          <Menu.Item>
            <p className="site__menu-text"> GSM Modern on Map</p>
          </Menu.Item>
          <Menu.Item>
            <p className="site__menu-text">Quản lý cảnh báo</p>
          </Menu.Item>

          <div className="site__menu-title">
            <p>                         </p>
          </div>
          <Menu.Item>
            <p className="site__menu-text">Báo cáo theo PGD</p>
          </Menu.Item>
          <Menu.Item>
            <p className="site__menu-text">Báo cáo theo ATM</p>
          </Menu.Item>

          <div className="site__menu-title">
            <p>                         </p>
          </div>
          <Menu.Item>
            <p className="site__menu-text">Quyền truy cập</p>
          </Menu.Item>
          <Menu.Item>
            <p className="site__menu-text">Quản lý thiết bị - GSM</p>
          </Menu.Item>
          <Menu.Item>
            <p className="site__menu-text">Quản lý người dùng</p>
          </Menu.Item>
          <Menu.Item>
            <p className="site__menu-text">Audit log</p>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "15px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 0, textAlign: "center" }}
          >
            <div className="layout__user">
              <Button
                style={{
                  position: "absolute",
                  top: "26px",
                  left: "1622px",
                  height: "44px",
                  width: "85px",
                  borderRadius: "8px",
                  padding: "8px 4px 8px 8px",
                  border: "1px solid #1085C5",
                }}
              >
                VNM
                <DownOutlined />
              </Button>
              <div className="layout__user-avatar">
                <Avatar
                  style={{
                    position: "absolute",
                    left: "1731px",
                    top: "26px",
                  }}
                  size={45}
                  icon={<UserOutlined />}
                />
                <p
                  style={{
                    position: "absolute",
                    left: "1783px",
                    top: "38px",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Ngọc Tuyền <DownOutlined />
                </p>
              </div>
            </div>
          </div>
        </Content>
        <Content style={{ overflow: "initial" }}>
          <div className="site-layout-dash">
            <p>Dashboard</p>
            <p>Thứ 2, ngày 05/06/2021</p>
          </div>
        </Content>
        <Content>
          <div /*className="site-layout-time"*/>
            <div className="site-layout-border">
              <div className="active">Ngày</div>
              <div>Tuần</div>
              <div>Tháng</div>
              <div
                style={{
                  paddingRight: "50px",
                }}
              >
                Năm
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  marginBottom: "0",
                  marginRight: "8px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#114A69",
                  position: "absolute",
                  width: "76px",
                  height: "20px",
                  left: "1596px",
                  top: "172px",
                }}
              >
                Thời gian:{" "}
              </p>
              <Space direction="vertical">
                <DatePicker
                  onChange={onChange}
                  style={{
                    borderRadius: "8px",
                    position: "absolute",
                    width: "200px",
                    height: "44px",
                    left: "1688px",
                    top: "160px",
                  }}
                />
              </Space>
            </div>
          </div>
        </Content>
        <Content>
          <div className="layout-dash-item">
            <div className="layout-item-box">
              <div className="layout-item-center">
                <div
                  className="layout-item-icon child-1"
                  style={{
                    fontSize: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AlertOutlined />
                </div>
                <p
                  style={{
                    fontWeight: 500,
                    color: "#b8afaf",
                  }}
                >
                  Tổng số thiết bị
                </p>
                <p>
                  <span style={{ fontSize: "18px", fontWeight: "800" }}>
                    4.052
                  </span>{" "}
                  thiết bị
                </p>
              </div>
            </div>
            <div className="layout-item-box">
              <div className="layout-item-center">
                <div
                  className="layout-item-icon child-2"
                  style={{
                    fontSize: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AlertOutlined />
                </div>
                <p
                  style={{
                    fontWeight: 500,
                    color: "#b8afaf",
                  }}
                >
                  Tổng số thiết bị
                </p>
                <p>
                  <span style={{ fontSize: "18px", fontWeight: "800" }}>
                    4.052
                  </span>{" "}
                  thiết bị
                </p>
              </div>
            </div>
            <div className="layout-item-box">
              <div className="layout-item-center">
                <div
                  className="layout-item-icon child-3"
                  style={{
                    fontSize: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AlertOutlined />
                </div>
                <p
                  style={{
                    fontWeight: 500,
                    color: "#b8afaf",
                  }}
                >
                  Tổng số thiết bị
                </p>
                <p>
                  <span style={{ fontSize: "18px", fontWeight: "800" }}>
                    4.052
                  </span>{" "}
                  thiết bị
                </p>
              </div>
            </div>
          </div>
        </Content>
        <Content>
          <div className="site-layout-item-2">
            <p className="site-item-2-title">Trạng thái thiết bị</p>
            <div className="item-2-box">
              <div className="item-2-center">
                <p>Kết nối nguồng AC</p>
                <div className="item-2-icon">
                  <div className="item-2-icon-box"></div>
                </div>
              </div>
            </div>
          </div>
        </Content>

        <Content>
          <div className="site-layout-item-3">
            <p>Cảnh báo ATM</p>
            <div className="site-item-3-box">
              <div className="site-item-3-item">
                <div className="item-3-box">
                  <div className="item-3-icon icon-1"></div>
                  <div className="item-3-title">
                    <p>Nhiệt</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
              <div className="site-item-3-item">
                <div className="item-3-box">
                  <div className="item-3-icon icon-2"></div>
                  <div className="item-3-title">
                    <p>Khói</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
              <div className="site-item-3-item">
                <div className="item-3-box">
                  <div className="item-3-icon icon-3"></div>
                  <div className="item-3-title">
                    <p>Rung</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-item-3-box">
              <div className="site-item-3-item">
                <div className="item-3-box">
                  <div className="item-3-icon icon-4"></div>
                  <div className="item-3-title">
                    <p>Dịch chuyển</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
              <div className="site-item-3-item">
                <div className="item-3-box">
                  <div className="item-3-icon icon-5"></div>
                  <div className="item-3-title">
                    <p>Rò điện</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
              <div className="site-item-3-item">
                <div className="item-3-box">
                  <div className="item-3-icon icon-6"></div>
                  <div className="item-3-title">
                    <p>Cửa trên</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-item-3-box">
              <div className="site-item-3-item">
                <div className="item-3-box">
                  <div className="item-3-icon icon-7"></div>
                  <div className="item-3-title">
                    <p>Cảnh báo cửa ngoài</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Content>
        <div className="site-layout-item-4">
            <p>Cảnh báo phòng giao dịch</p>
            <div className="site-item-4-box">
              <div className="site-item-4-item">
                <div className="item-4-box">
                  <div className="item-4-icon icon4-1"></div>
                  <div className="item-4-title">
                    <p>Báo động khẩn cấp</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
              <div className="site-item-4-item">
                <div className="item-4-box">
                  <div className="item-4-icon icon4-2"></div>
                  <div className="item-3-title">
                    <p>Báo động xâm nhập</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
              <div className="site-item-4-item">
                <div className="item-4-box">
                  <div className="item-4-icon icon4-3"></div>
                  <div className="item-4-title">
                    <p>Báo động tại chỗ</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-item-4-box">
              <div className="site-item-4-item">
                <div className="item-4-box">
                  <div className="item-4-icon icon4-4"></div>
                  <div className="item-4-title">
                    <p>Báo động qua GSM</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
              <div className="site-item-4-item">
                <div className="item-4-box">
                  <div className="item-4-icon icon4-5"></div>
                  <div className="item-3-title">
                    <p>Cảnh báo khói</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
              <div className="site-item-4-item">
                <div className="item-4-box">
                  <div className="item-4-icon icon4-6"></div>
                  <div className="item-4-title">
                    <p>Cảnh báo rung</p>
                    <p>
                      <span className="big">253</span>Thiết bị
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
